const updateFavorites = async (app, path, mongoClient, collectionName) => {
  app.post(`${path}`, async (req, res) => {
    const db = mongoClient.db("iphoneShop");
    const collection = db.collection(`${collectionName}`);
    await collection.updateOne(
      { token: `${req.body.token}` },
      { $set: { wireles: req.body.favoritesProducts.wireles, headphones: req.body.favoritesProducts.headphones } }
    );
  });
};

module.exports = updateFavorites;
