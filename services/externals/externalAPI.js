const swapi = require('swapi-node');
module.exports.persistance = async (id)=> {
    const data = await swapi.people({ id })
  
    const params = {
        TableName: "swapi3",
        Item: {
        id:id,
        data
        },
    };
    return params
}