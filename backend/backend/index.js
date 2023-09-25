const express = require("express");
const cors = require("cors");
const findCatalogProducts = require("../function/catalog/findCatalogProducts");
const sendProduct = require("../function/sendProduct");
const registration = require("../function/registration");
const entrance = require("../function/entrance");
const getUserData = require("../function/getUserData");
const updateDate = require("../function/updateDate");
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = "mongodb+srv://tim:qIV9ZLONHGcqHBxP@cluster0.h3fzhat.mongodb.net/?retryWrites=true&w=majority";
const mongoClient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const PORT = 5174;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/public`));

(async () => {
  try {
    await mongoClient.connect();
    app.listen(PORT);
    console.log("server started on port " + PORT);
  } catch (err) {
    return console.log(err);
  }
})();

sendProduct(app, "/coversData", mongoClient, "coversData");
sendProduct(app, "/unWirelessHeadphonesData", mongoClient, "HeadphonesData");
sendProduct(app, "/wirelessHeadphonesData", mongoClient, "WirelesseHeadphonesData");
sendProduct(app, "/iphonessss", mongoClient, "iphones");

findCatalogProducts(app, "/catalog/:id", mongoClient);

registration(app, "/registration", mongoClient, "usersData");

entrance(app, "/entrance", mongoClient, "usersData");

getUserData(app, "/getUserData", mongoClient, "usersData");

updateDate(app, "/updateDate", mongoClient, "usersData");
