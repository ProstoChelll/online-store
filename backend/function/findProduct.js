const findProduct = (catalog, dbName, Productid) => {
  if (dbName == "HeadphonesData") {
    return catalog[0].unWirelessHeadphonesData.find((elem) => elem.id == String(Productid));
  } else if (dbName == "iphones") {
    return catalog[0].iphonesData.find((elem) => elem.id == String(Productid));
  } else if (dbName == "usersData") {
    return catalog[0].usersData.find((elem) => elem.id == String(Productid));
  } else if (dbName == "WirelesseHeadphonesData") {
    return catalog[0].wirelessHeadphonesData.find((elem) => elem.id == String(Productid));
  }
};

module.exports = findProduct;
