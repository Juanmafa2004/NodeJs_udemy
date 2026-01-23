// const { getUuid } = require('../plugins/get-id-plugin');
// const { getAge } = require('../plugins/get-age.plugin');

// const { getUuid, getAge } = require('../plugins');


const buildMakePerson = ({ getUuid, getAge }) => {

    return ({ name, birthday }) => {


        return {
            id: getUuid(),
            name: name,
            birthday: birthday,
            age: getAge(birthday)

        }
    };
}






// const obj = { name: 'Juan', birthday: '10-10-1990' };


// const jhon = buildPerson(obj);

// console.log(jhon);


module.exports = {
    buildMakePerson,
};