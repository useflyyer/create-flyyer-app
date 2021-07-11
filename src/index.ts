import fs from "fs";
import path from "path";

import { Command, flags } from "@oclif/command";
import chalk from "chalk";
import dedent from "dedent";
import { prompt } from "enquirer";
import { titleCase } from "title-case";

import { namespaced } from "./utils/debug";
import { recursiveCopy } from "./utils/file";
import { slugify } from "./utils/slugify";

const debug = namespaced("new");

const TEMPLATES_DIR = path.join(__dirname, "..", "templates");
const CHOICES = fs.readdirSync(TEMPLATES_DIR).filter((name) => {
  return fs.lstatSync(path.join(TEMPLATES_DIR, name)).isDirectory();
});

class CreateFlyyerApp extends Command {
  static description = "create a new flyyer project";

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    template: flags.string({ char: "t", description: "starting template", options: CHOICES }),
  };

  static args = [{ name: "name", description: "output directory for templates" }];

  async run(): Promise<void> {
    debug("cli version is: %s", this.config.version);
    const { args, flags } = this.parse(CreateFlyyerApp);

    const response = await prompt<{ name: string; template: string }>([
      {
        type: "input",
        name: "name",
        initial: args.name,
        skip: Boolean(args.name),
        message: "Enter project name",
        validate: Boolean,
      },
      {
        type: "autocomplete" as any,
        name: "template",
        message: "Select the best template setup for you",
        hint: "You can customize the template later",
        initial: flags.template, // TODO: this expects an index
        skip: Boolean(flags.template),
        choices: CHOICES,
      },
    ]);

    const template = typeof response.template === "string" ? response.template : CHOICES[response.template];
    const slug = slugify(response.name);
    if (template) {
      debug("will use: %o", { slug, template });
    } else {
      this.error("Missing or invalid template");
    }

    const CURR_DIR = process.cwd();
    const templatePath = path.join(TEMPLATES_DIR, template);
    const destination = path.join(CURR_DIR, slug);

    debug("current directory is: %s", CURR_DIR);
    debug("templates source directory is: %s", TEMPLATES_DIR);
    debug("template source directory is: %s", templatePath);
    debug("target path is: %s", destination);

    if (fs.existsSync(destination)) {
      this.error(`Folder ${destination} exists. Delete or use another name.`);
    }
    fs.mkdirSync(destination);

    const SKIP_FILES = ["node_modules", ".flyyer-cache", ".flyyer-dist", ".flyyer-processed", ".flyyer-dev"];
    const replace = {
      "replace-slug": slug,
      "replace-title": titleCase(slug),
      "replace-cli-version": "^2.0.1", // TODO: find a way of getting this value
      "replace-create-version": this.config.version,
    };
    const rename = { ".npmignore": ".gitignore" }; // For some (bold) reason, npm renames .gitignores to .npmignores
    debug("replacement values: %o", replace);
    debug("rename values: %o", rename);
    debug("skip files: %o", SKIP_FILES);
    debug("will copy and replace: %o", { from: templatePath, to: destination });
    recursiveCopy(templatePath, destination, SKIP_FILES, replace, rename);

    this.log(dedent`
      💫 Great!

      ${chalk.green(
        `Deck '${chalk.bold(slug)}' from preset '${chalk.bold(template)}' was successfully created at: ${destination}`,
      )}

      Now go to the generated directory and install the initial dependencies:

        ${chalk.bold(`cd ${slug}`)}
        ${chalk.bold(`npm install`)}

      To start the development server run:

        ${chalk.bold("npm run start")}

      When you are ready to deploy execute:

        ${chalk.bold(`NODE_ENV=production npm run build && npm run deploy`)}

      Remember to setup your 'FLYYER_KEY' environment variable.
      Forgot your key? Go to https://flyyer.io/dashboard/_/settings
      First time using Flyyer? Create an account at https://flyyer.io/get-started
    `);

    debug("exiting oclif");
    this.exit();
  }
}

export = CreateFlyyerApp;
