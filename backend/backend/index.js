const express = require("express");
const cors = require("cors");
const findProduct = require("../function/findProduct");
const { MongoClient, ServerApiVersion } = require("mongodb");
const bcrypt = require("bcrypt");

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

app.get("/coversData", async (req, res) => {
  const collection = mongoClient.db("iphoneShop").collection("coversData");
  try {
    const users = await collection.find({}).toArray();
    res.send(users);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
app.get("/unWirelessHeadphonesData", async (req, res) => {
  const collection = mongoClient.db("iphoneShop").collection("HeadphonesData");
  try {
    const users = await collection.find({}).toArray();
    res.send(users);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
app.get("/wirelessHeadphonesData", async (req, res) => {
  const collection = mongoClient.db("iphoneShop").collection("WirelesseHeadphonesData");
  try {
    const users = await collection.find({}).toArray();
    res.send(users);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
app.get("/iphonessss", async (req, res) => {
  const collection = mongoClient.db("iphoneShop").collection("iphones");
  try {
    const users = await collection.find({}).toArray();
    res.send(users);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.post("/catalog/:id", async (req, res) => {
  let product;
  if (req.body.catalogName == "headhpones") {
    const collection = mongoClient.db("iphoneShop").collection("HeadphonesData");
    const users = await collection.find({}).toArray();
    product = findProduct(users, "HeadphonesData", String(req.body.id));
  } else if (req.body.catalogName == "iphonessss") {
    const collection = mongoClient.db("iphoneShop").collection("iphones");
    const users = await collection.find({}).toArray();
    product = findProduct(users, "iphones", String(req.body.id));
  } else if (req.body.catalogName == "users") {
    const collection = mongoClient.db("iphoneShop").collection("usersData");
    const users = await collection.find({}).toArray();
    product = findProduct(users, "usersData", String(req.body.id));
  } else {
    const collection = mongoClient.db("iphoneShop").collection("WirelesseHeadphonesData");
    const users = await collection.find({}).toArray();
    product = findProduct(users, "WirelesseHeadphonesData", String(req.body.id));
  }
  JSON.stringify(product);
  res.json(product);
});

app.post("/registration", async (req, res) => {
  const db = mongoClient.db("iphoneShop");
  const collection = db.collection("usersData");
  const hashedPassword = bcrypt.hashSync(req.body.password, 7);

  const checkUser = await collection.find({ name: `${req.body.nikcname}` }).toArray();
  if (checkUser.length == 0) {
    const user = { name: req.body.nikcname, password: hashedPassword };
    const result = await collection.insertOne(user);
  } else {
    res.status(401).json({ message: "user with this nickname already exists" });
  }
});

app.post("/entrance", async (req, res) => {
  const db = mongoClient.db("iphoneShop");
  const collection = db.collection("usersData");

  const checkUser = await collection.find({ name: `${req.body.nikcname}` }).toArray();
  if (checkUser.length != 0) {
    if (bcrypt.compareSync(req.body.password, checkUser[0].password)) {
      res.json(true);
    } else {
      res.status(401).json("incorrect password");
    }
  } else {
    res.status(401).json("user with this nickname is not registered");
  }
});

// usersHandler(app, "/registration");
// sendFoundRes(app, "/entrance");
