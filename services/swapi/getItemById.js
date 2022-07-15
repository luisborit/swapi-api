const DBPersistance = require('../../models/DBPersistance')

module.exports.getItemById = async (event, context, callback) => {
  const params = {
    TableName: "swapi3",
    Key: {
      id: event.pathParameters.id,
    },
  };
  try {
    const { Item } = await DBPersistance.get(params)
    if (Item) {
      const { data } = Item;
      return callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    data
                })
            });
    } else {
      throw new Error('Could not find record with provided id')
    }
  } catch (error) {
    throw new Error("Could not create record")
  }
}