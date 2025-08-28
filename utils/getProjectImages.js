// utils/getProjectImages.js
import fs from "fs";
import path from "path";

export function getProjectImages(projectName) {
  const dirPath = path.join(process.cwd(), "public", "projects", projectName, "imges");
  const files = fs.readdirSync(dirPath);

  return files.map(file => `/projects/${projectName}/imges/${file}`);
}
