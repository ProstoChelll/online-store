const updateDate = (app, path, mongoClient, collectionName) => {
  app.post(`${path}`, async (req, res) => {
    const db = mongoClient.db("iphoneShop");
    const collection = db.collection(`${collectionName}`);
    const dbData = await collection.find({ token: `${req.body.token}` }).toArray();

    dbData[0].bagProducts = req.body.data.bagProducts;
    dbData[0].favoritesProducts = req.body.data.favoritesProducts;
    await collection.replaceOne({ token: `${req.body.token}` }, dbData[0]);
  });
};

module.exports = updateDate;
