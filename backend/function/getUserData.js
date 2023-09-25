const getUserData = (app, path, mongoClient, collectionName) => {
  app.post(`${path}`, async (req, res) => {
    const db = mongoClient.db("iphoneShop");
    const collection = db.collection(`${collectionName}`);

    const checkUser = await collection.find({ token: `${req.body.token}` }).toArray();
    if (checkUser.length != 0) {
      const userData = {
        nickname: checkUser[0].name,
        token: checkUser[0].token,
        bagProducts: checkUser[0].bagProducts,
        favoritesProducts: checkUser[0].favoritesProducts,
      };
      res.json(userData);
    }
  });
};

module.exports = getUserData;
