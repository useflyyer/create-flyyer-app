import fs from "fs";
import path from "path";

export function recursiveCopy(
  templatePath: string,
  targetPath: string,
  skipFiles: string[],
  replace: { [key: string]: string },
) {
  function replaceAll(string: string, search: string, replace: string) {
    return string.split(search).join(replace);
  }

  function createDirectoryContents(templatePath: string, targetPath: string) {
    // read all files/folders (1 level) from template folder
    const filesToCreate = fs.readdirSync(templatePath);

    // loop each file/folder
    for (const file of filesToCreate) {
      const origFilePath = path.join(templatePath, file);

      // get stats about the current file
      const stats = fs.statSync(origFilePath);

      // skip files that should not be copied
      if (skipFiles.includes(file)) continue;

      if (stats.isFile()) {
        // read file content and transform it using template engine
        let contents = fs.readFileSync(origFilePath, "utf8");
        // write file to destination folder
        const writePath = path.join(targetPath, file);

        for (const [key, value] of Object.entries(replace)) {
          contents = replaceAll(contents, `{{ ${key} }}`, value);
        }

        fs.writeFileSync(writePath, contents, "utf8");
      } else if (stats.isDirectory()) {
        // create folder in destination folder
        fs.mkdirSync(path.join(targetPath, file));
        // copy files/folder inside current folder recursively
        createDirectoryContents(path.join(templatePath, file), path.join(targetPath, file));
      }
    }
  }

  return createDirectoryContents(templatePath, targetPath);
}
