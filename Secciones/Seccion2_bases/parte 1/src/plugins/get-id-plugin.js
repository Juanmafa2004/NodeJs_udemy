const { v4:uuid4 } = require('uuid');


const getUuid = () => {

    return uuid4();

};



module.exports = {
    getUuid,
};