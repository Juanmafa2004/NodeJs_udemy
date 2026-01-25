// const {emailTemplate}=require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const {buildMakePerson} = require('./js-foundation/05-factory');
// const {getUuid,getAge}=require('./plugins');

const getPokemonById = require('./js-foundation/06-promises');

getPokemonById(1)
    .then(pokemon => {
        console.log({ pokemon })
    })
    .catch(err => console.log(err))
    ;






//! Referencia y uso de una factory function

// const  makePerson = buildMakePerson({getUuid,getAge});

// const obj = { name: 'Jhon', birthday: '10-10-1990' };

// const jhon = makePerson(obj);

// console.log(jhon);
