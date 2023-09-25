const findProduct = require("../findProduct");

const getProduct = async (mongoClient, productCollectionName, id) => {
  const collection = mongoClient.db("iphoneShop").collection(`${productCollectionName}`);
  const users = await collection.find({}).toArray();
  let product = findProduct(users, `${productCollectionName}`, id);
  return product;
};

module.exports = getProduct;
