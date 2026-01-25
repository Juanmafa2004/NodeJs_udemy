const users = [{
    id: 1,
    name: 'Juan',
},
{
    id: 2,
    name: 'Karla',
}
];

const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);

    user ? callback(null, user) : callback(`User with id ${id} not found`); // al no tener un error se manda nulo y en el segundo parametro se devuelve el usuario encontrado

}

module.exports = { getUserById };