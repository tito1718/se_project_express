const ClothingItem = require("../models/clothingItem");

const getItems = (req, res) => {
  ClothingItem.find({})
    .then((items) => res.send(items))
    .catch((err) => res.status(500).send({ message: err.message }));
};

const createItem = (req, res) => {
  const { name, weather, imageUrl, owner } = req.body;

  ClothingItem.create({ name, weather, imageUrl, owner })
    .then((item) => res.status(201).send(item))
    .catch((err) => res.status(400).send({ message: err.message }));
};

const deleteItem = (req, res) => {
  ClothingItem.findByIdAndDelete(req.params.itemId)
    .orFail()
    .then((item) => res.send(item))
    .catch((err) => res.status(404).send({ message: err.message }));
};

module.exports = {
  getItems,
  createItem,
  deleteItem,
};
