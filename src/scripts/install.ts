#!/usr/bin/env node
import fs from "fs";
import path from "path";
import https from "https";

const COMPONENTS_REPO_BASE =
  "https://raw.githubusercontent.com/yourgithubuser/my-ui-library/main/components";

const componentName = process.argv[2];
if (!componentName) {
  console.error("Usage: install <ComponentName>");
  process.exit(1);
}

const componentFiles = ["Button.tsx", "index.ts"];

const targetDir = path.join(
  process.cwd(),
  "components",
  componentName.toLowerCase()
);

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

componentFiles.forEach((file) => {
  const url = `${COMPONENTS_REPO_BASE}/${componentName.toLowerCase()}/${file}`;
  const dest = path.join(targetDir, file);

  https
    .get(url, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Failed to download ${file}`);
        return;
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on("finish", () => {
        console.log(`Downloaded ${file}`);
      });
    })
    .on("error", (err) => {
      console.error(`Error: ${err.message}`);
    });
});
