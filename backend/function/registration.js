const bcrypt = require("bcrypt");

const registration = (app, path, mongoClient, collectionName) => {
  app.post(`${path}`, async (req, res) => {
    const db = mongoClient.db("iphoneShop");
    const collection = db.collection(`${collectionName}`);
    const hashedPassword = bcrypt.hashSync(req.body.password, 7);

    const checkUser = await collection.find({ name: `${req.body.nickname}` }).toArray();
    if (checkUser.length == 0) {
      const user = {
        name: req.body.nickname,
        password: hashedPassword,
        token: "123",
      };
      const result = await collection.insertOne(user);
      res.json(true);
    } else {
      res.status(401).json({ message: "user with this nickname already exists" });
    }
  });
};

module.exports = registration;
