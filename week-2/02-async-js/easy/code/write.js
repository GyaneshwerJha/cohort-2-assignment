const { error } = require('console');
const fs = require('fs');

function wirteContent(fileName){
    fs.writeFile(fileName, contentToWrite, 'utf8', (error)=>{
        if(error){
            console.log(`The error is : ${error.message}`);
        }
        else{
            console.log("File Written successFully");
        }
    })
}




const fileName = "read.txt";
const contentToWrite = "Hi I am jarvis";
wirteContent(fileName);