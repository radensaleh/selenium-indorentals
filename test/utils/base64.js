import fs from "fs";

const ReadFileAsBase64 = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (error, data) => {
      if (error) {
        reject(error);
      } else {
        const base64String = data.toString("base64");
        resolve(base64String);
      }
    });
  });
};

export default ReadFileAsBase64;
