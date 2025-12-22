//  Create/writeFS.promises.writeFile().then().catch()

// write file

// const fs= require ("fs/promises");
// const path = require ("path");

// const fileName="promise.txt";
// const filePath = path.join(__dirname,fileName);

// fs.writeFile(filePath,"Hello","utf-8").then(
//     (data)=> {console.log(data);}
// ).catch(
//     (error)=>{console.log(error);}
// )



// read file
// const fs= require ("fs/promises");
// const path = require ("path");

// const fileName="promise.txt";
// const filePath = path.join(__dirname,fileName);

// fs.readFile(filePath,"utf-8").then(
//     (data)=> {console.log(data);}
// ).catch(
//     (error)=>{console.log(error);}
// )


 //  update file

// const fs= require ("fs/promises");
// const path = require ("path");

// const fileName="promise.txt";
// const filePath = path.join(__dirname,fileName);

// fs.appendFile(filePath,"\nHow are you?","utf-8").then(
//     (data)=> {console.log(data);}
// ).catch(
//     (error)=>{console.log(error);}
// )


//  delete file
const fs= require ("fs/promises");
const path = require ("path");

const fileName="promise.txt";
const filePath = path.join(__dirname,fileName);

fs.unlink(filePath).then(
    (data)=> {console.log(data);}
).catch(
    (error)=>{console.log(error);}
)

// reading files (promises)
const fs =require ("fs/promises");
const path =require ("path");

// const fileName="promise.txt";
// const filePath = path.join(__dirname,fileName);

const path1=__dirname;
fs.readdir(path1).then(
    (data)=>{console.Console.log(data);}
).catch(
    (error)=>{console.log(error);}
)
