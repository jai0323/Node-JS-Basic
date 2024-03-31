const fs  = require('fs');
const path = require('path');

//create folder
// fs.mkdir(path.join(__dirname,'/test'), (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Folder Created");
//     }
// })



// Create and Write to file
fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World!!!', (err) => {
    if(err) 
        console.log(err);
    else 
        console.log("File Created and write");
})

// Read File
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf-8', (err,data) => {
    if(err) 
        console.log(err);
    else 
        console.log(data);
})