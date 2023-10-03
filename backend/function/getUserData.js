const getUserData = (app, path, mongoClient, collectionName) => {
  app.post(`${path}`, async (req, res) => {
    const db = mongoClient.db("iphoneShop");
    let collection = db.collection(`${collectionName}`);

    const checkUser = await collection.find({ token: `${req.body.token}` }).toArray();
    if (checkUser.length != 0) {
      const userData = {
        nickname: checkUser[0].name,
        token: checkUser[0].token,
        bagProducts: "",
        favoritesProducts: "",
      };
      collection = db.collection("userBag");
      const checkBagUser = await collection.find({ token: `${req.body.token}` }).toArray();
      userData.bagProducts = { wireles: checkBagUser[0].wireles, headphones: checkBagUser[0].headphones };

      collection = db.collection("userFavorites");
      const checkFavoritesUser = await collection.find({ token: `${req.body.token}` }).toArray();
      userData.favoritesProducts = { wireles: checkFavoritesUser[0].wireles, headphones: checkFavoritesUser[0].headphones };
      res.json(userData);
    }
  });
};

module.exports = getUserData;
