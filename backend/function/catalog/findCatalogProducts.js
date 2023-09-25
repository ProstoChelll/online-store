const getProduct = require("./getProduct");

const findCatalogProducts = (app, path, mongoClient) => {
  app.post(`${path}`, async (req, res) => {
    let product;
    if (req.body.catalogName == "headhpones") {
      product = await getProduct(mongoClient, "HeadphonesData", req.body.id);
    } else if (req.body.catalogName == "iphonessss") {
      product = await getProduct(mongoClient, "iphones", req.body.id);
    } else if (req.body.catalogName == "users") {
      product = await getProduct(mongoClient, "usersData", req.body.id);
    } else {
      product = await getProduct(mongoClient, "WirelesseHeadphonesData", req.body.id);
    }
    JSON.stringify(product);
    res.json(product);
  });
};

module.exports = findCatalogProducts;
