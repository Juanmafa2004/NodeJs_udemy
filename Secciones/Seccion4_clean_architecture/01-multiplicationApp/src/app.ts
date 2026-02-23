import fs from 'fs';

// const message: string = "Hello World";


// console.log(message);


//ejercicio de tarea

// const num: number = 5;


// const tablaMultiplicar = (num: number) => {

//     console.log(`Tabla de multiplicar del ${num}`);

//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num} x ${i} = ${num * i}`);
//     }

// }

// tablaMultiplicar(num);


let outputMessage = '';
const base = 5;
const headerMessage = `
====================================
  Tabla de multiplicar del ${base}
====================================
`;

for (let i = 1; i <= 10; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}
outputMessage = headerMessage + outputMessage;

const outPutPath = `outputs`

fs.mkdirSync(outPutPath, { recursive: true });

fs.writeFileSync(`${outPutPath}/tabla-${base}.txt`, outputMessage);