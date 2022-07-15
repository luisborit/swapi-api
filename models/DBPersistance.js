const AWS = require("aws-sdk");
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

module.exports.get = async(params)=>{
    return await dynamoDbClient.get(params).promise();
}
module.exports.put = async(params)=>{
    return await dynamoDbClient.put(params).promise();
}