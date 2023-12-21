const fs = require('fs');

function cleanFile(filePath){

    const content = fs.readFileSync(filePath, 'utf-8');
    console.log(content);

    const cleanedContent = content.split(/\s+/).join(' ');

    fs.writeFileSync(filePath, cleanedContent)

    console.log(cleanedContent);
}



const filePath = 'read.txt';
cleanFile(filePath);