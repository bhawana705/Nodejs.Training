// const fs= require ("fs");
// const path = require ("path");

// const fileName="bhawna.txt";
// const filePath = path.join(__dirname,fileName);

// fs.writeFileSync(path,DataTransfer,optional)-write sync
// fs.writeFile(path,DataTransfer,optional,callback)-write async(callback)
// fs.promises.writeFile(path,DataTransfer,optional)-write async(async await)

// const writeFileExample =async()=>{
//     try{
//        await fs.promises.writeFile(filePath,"This is inital data","utf-8");
//     }catch(err){
//         console.log(err);
//     }
// };



// writeFileExample();

// const fs= require ("fs");
// const path = require ("path");

// const fileName="bhawna.txt";
// const filePath = path.join(__dirname,fileName);

// const writeFileExample =async()=>{
//     try{
//        await fs.promises.writeFile(filePath,"This is inital data","utf-8");
//        console.log("suycessfully created");
//     }catch(err){
//         console.log(err);
//     }
// };
// writeFileExample();


// async function writeFileExample(){
//     await FSWatcher.promises.writeFile(filePath,"bhawana pandey","utf-8");
//     console.log("sucessfully created");
// }
// writeFileExample();



// Read File //

// const fs= require ("fs");
// const path = require ("path");

// const fileName="bhawna.txt";
// const filePath = path.join(__dirname,fileName);
// const readFileExample =async()=>{
//     try{
//        const data = await fs.promises.readFile(filePath,"utf-8");
//        console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// };
// readFileExample();



// update file //

// const fs= require ("fs");
// const path = require ("path");

// const fileName="bhawna.txt";
// const filePath = path.join(__dirname,fileName);
// const updateFileExample =async()=>{
//     try{
//       await fs.promises.appendFile(filePath,"Namaste","utf-8");
//        console.log("file update");
//     }catch(err){
//         console.log(err);
//     }
// };
// updateFileExample();



// delete file //

const fs= require ("fs");
const path = require ("path");

const fileName="bhawna.txt";
const filePath = path.join(__dirname,fileName);
const deleteFileExample =async()=>{
    try{
      await fs.promises.unlink(filePath);
       console.log("file delete");
    }catch(err){
        console.log(err);
    }
};
deleteFileExample();