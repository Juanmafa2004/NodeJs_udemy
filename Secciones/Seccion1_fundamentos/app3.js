const fs = require('fs');

const content = fs.readFileSync('readmeseccion1.md', 'utf8');

console.log(typeof content);

const words = content.split(' ').length;

const reactWords = content.match(/React/ig ?? [] ).length;

console.log('Total de palabras', words);

console.log('Conteo de la palabra React', reactWords);


