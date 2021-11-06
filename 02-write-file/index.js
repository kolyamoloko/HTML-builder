const readline = require("readline");
const path = require("path");
const fs = require("fs");
console.log("Введите текст");
const exit = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});
const textFile = path.join(__dirname, "textFile.txt");
fs.writeFile(textFile, "", (err) => {
  if (err) {
    throw err;
  }
});
exit.on("line", (line) => {
    if (line == "exit"){
        console.log("До свидания!");
        process.exit(0);
    }
fs.appendFile(textFile, `\n${line}`,(err) => {
    if (err) {
        throw err;
    }
});
})
exit.on("close", () => {
    console.log("До свидания!");
    process.exit(0);
});