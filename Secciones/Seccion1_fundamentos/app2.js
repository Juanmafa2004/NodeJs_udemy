const fs = require('fs');

const data = fs.readFileSync('readmeseccion1.md', 'utf8');


const newData = data.replace(/React/ig, 'NodeJS&React');

console.log(data);

fs.writeFileSync('Readme-NodeJs.md', newData);