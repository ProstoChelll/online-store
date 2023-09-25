const sendProduct = async (app, path, mongoClient, collectionName) => {
  app.get(`${path}`, async (req, res) => {
    const collection = mongoClient.db("iphoneShop").collection(`${collectionName}`);
    try {
      const users = await collection.find({}).toArray();
      res.send(users);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });
};

module.exports = sendProduct;
