const addFavoritesData = (app, path, mongoClient, collectionName) => {
  app.post(`${path}`, async (req, res) => {
    const db = mongoClient.db("iphoneShop");
    let collection = db.collection(`${collectionName}`);

    const dbUser = await collection.find({ name: req.body.nickname }).toArray();
    if (!dbUser.length == 0) {
      const dbUserToken = dbUser[0].token;
      const data = {
        token: dbUserToken,
        wireles: [...req.body.wireles],
        headphones: [...req.body.headphones],
      };
      collection = db.collection("userFavorites");
      const result = await collection.insertOne(data);
    } else {
      res.status(401).json({ message: "user with this nickname already exists" });
    }
  });
};
module.exports = addFavoritesData;
