const {readFileSync,writeFileSync}=require('fs');
const first=readFileSync("./content/first.txt","utf8");//reading a file
console.log(first)
writeFileSync("./content/result.txt","Hi God","utf8");//writing a file