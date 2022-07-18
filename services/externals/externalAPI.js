const swapi = require('swapi-node');
module.exports.persistance = async (id)=> {
    const data = await swapi.people({ id })
    return data
}