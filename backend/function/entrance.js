const bcrypt = require("bcrypt");

const entrance = (app, path, mongoClient, collectionName) => {
  app.post(`${path}`, async (req, res) => {
    const db = mongoClient.db("iphoneShop");
    let collection = db.collection(`${collectionName}`);
    const checkUser = await collection.find({ name: `${req.body.nikcname}` }).toArray();

    if (checkUser.length != 0) {
      if (bcrypt.compareSync(req.body.password, checkUser[0].password)) {
        let userData = {
          token: checkUser[0].token,
          bagProducts: "",
          favoritesProducts: "",
        };
        collection = db.collection("userFavorites");
        let userFavorites = await collection.find({ token: userData.token }).toArray();
        userData.favoritesProducts = { wireles: userFavorites[0].wireles, headphones: userFavorites[0].headphones };

        collection = db.collection("userBag");
        let userBag = await collection.find({ token: userData.token }).toArray();
        userData.favoritesProducts = { wireles: userBag[0].wireles, headphones: userBag[0].headphones };
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
