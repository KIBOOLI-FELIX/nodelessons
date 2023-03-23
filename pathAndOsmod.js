const OS=require("os");
//current user
const USER=OS.userInfo()
// console.log(USER);
//system uptime in seconds
// console.log(`The system uptime is ${OS.uptime()} seconds`);
//useful data about the operating system
const CURRENTOS={
  name: OS.type(),
  release:OS.release(),
  totalmem:OS.totalmem(),
  freemem:OS.freemem()
}

// console.log(CURRENTOS);

const PATH=require("path");
//using join method of path module to normalize file path
let filePath=PATH.join("/content","subfolder","text.txt");
// console.log(PATH.sep);
console.log(filePath);
let base=PATH.basename(filePath);
console.log(base);
let absolute=PATH.resolve(__dirname,"/content","subfolder","text.txt");//returns absolute path
console.log(absolute);