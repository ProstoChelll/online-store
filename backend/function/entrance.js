const bcrypt = require("bcrypt");

const entrance = (app, path, mongoClient, collectionName) => {
  app.post(`${path}`, async (req, res) => {
    const db = mongoClient.db("iphoneShop");
    const collection = db.collection(`${collectionName}`);
    const checkUser = await collection.find({ name: `${req.body.nikcname}` }).toArray();

    if (checkUser.length != 0) {
      if (bcrypt.compareSync(req.body.password, checkUser[0].password)) {
        const userData = {
          token: checkUser[0].token,
          bagProducts: checkUser[0].bagProducts,
          favoritesProducts: checkUser[0].favoritesProducts,
        };
        res.json(userData);
      } else {
        res.status(401).json("incorrect password");
      }
    } else {
      res.status(401).json("user with this nickname is not registered");
    }
  });
};

module.exports = entrance;
