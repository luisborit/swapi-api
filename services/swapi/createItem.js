const {persistance} = require('../externals/externalAPI')
const DBPersistance = require('../../models/DBPersistance')

module.exports.createItem = async (event, context, callback) => {
  const  id  = event.pathParameters.id;
  const params = await persistance(id)
  
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