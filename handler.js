const AWS = require("aws-sdk");
const express = require("express");
const serverless = require("serverless-http");
const swapi = require('swapi-node');
const app = express();
const bodyParser = require( 'body-parser' );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ))

const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

app.get("/:id", async function (req, res) {
  const params = {
    TableName: "swapi3",
    Key: {
      id: req.params.id,
    },
  };
  try {
    const { Item } = await dynamoDbClient.get(params).promise();
    if (Item) {
      const { id, data } = Item;
      res.json({ id, data });
    } else {
      res
        .status(404)
        .json({ error: 'Could not find record with provided "id"' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not retreive record" });
  }
});

app.post("/", async function (req, res) {
  const  id  = req.body.id;

  const data = await swapi.people({ id })

  const params = {
    TableName: "swapi3",
    Item: {
      id:id,
      data
    },
  };

  console.log(params)

  try {
    await dynamoDbClient.put(params).promise();
    res.json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not create record" });
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
