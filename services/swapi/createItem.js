const {persistance} = require('../externals/externalAPI')
const DBPersistance = require('../../models/DBPersistance')
const {mapper} = require('../../utils/mapper')

module.exports.createItem = async (event, context, callback) => {
  const  id  = event.pathParameters.id;
  const dataFromSwapi = await persistance(id)
  const data = await mapper(dataFromSwapi)
  const params = {
        TableName: "swapi3",
        Item: {
        id:id,
        data
        },
    };
  try {
    await DBPersistance.put(params)
    return callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    params
                })
            });
  } catch (error) {
    throw new Error("Could not create record")
  }
}