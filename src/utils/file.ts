import fs from "fs";
import path from "path";

import { namespaced } from "./debug";

const debug = namespaced("utils:file");

// eslint-disable-next-line max-params
export function recursiveCopy(
  templatePath: string,
  targetPath: string,
  skipFiles: string[],
  replace: Record<string, string>,
  rename: Record<string, string>, // only files for now
): void {
  function replaceAll(string: string, search: string, replace: string) {
    return string.split(search).join(replace);
  }

  debug("executing function [recursiveCopy] with: %s -> %s", templatePath, targetPath);

  function createDirectoryContents(templatePath: string, targetPath: string) {
    debug("executing inner function [createDirectoryContents] with: %s -> %s", templatePath, targetPath);

    // read all files/folders (1 level) from template folder
    const filesToCreate = fs.readdirSync(templatePath);

    // loop each file/folder
    for (const fileName of filesToCreate) {
      const origFilePath = path.join(templatePath, fileName);

      // get stats about the current file
      const stats = fs.statSync(origFilePath);

      // skip files that should not be copied
      if (skipFiles.includes(fileName)) {
        debug("file was included in 'skipFiles' so will be ignored: %s", fileName);
        continue;
      }

      if (stats.isFile()) {
        const ext = path.extname(origFilePath);
        const destFileName = rename[fileName] ? rename[fileName]! : fileName;
        const writePath = path.join(targetPath, destFileName);

        debug("file '%s' will be copied to", origFilePath, writePath);

        // TODO: Find a better way of identifying blob files.
        if ([".png", ".jpeg", ".jpg", ".svg"].includes(ext)) {
          debug("file '%s' will be copied directly as blob", origFilePath);
          fs.copyFileSync(origFilePath, writePath);
        } else {
          debug("file '%s' will read as text", origFilePath);
          // read file content and transform it using template engine
          let contents = fs.readFileSync(origFilePath, "utf8");

          debug("will replace values (if needed): %o", replace);
          for (const [key, value] of Object.entries(replace)) {
            contents = replaceAll(contents, `{{ ${key} }}`, value);
          }

          // write file to destination folder
          fs.writeFileSync(writePath, contents, "utf8");
        }
      } else if (stats.isDirectory()) {
        // create folder in destination folder
        fs.mkdirSync(path.join(targetPath, fileName));
        // copy files/folder inside current folder recursively
        createDirectoryContents(path.join(templatePath, fileName), path.join(targetPath, fileName));
      }
    }
  }

  return createDirectoryContents(templatePath, targetPath);
}
