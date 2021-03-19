const { Router } = require("express");

const collection = Router();

const collectionData = [];

collection.get("/", async (req, res) => {
  res.json(collectionData);
});

collection.get("/status/:id", async (req, res) => {
  return res.json({
    status:
      collectionData.findIndex(
        (pokemon) => pokemon.id === parseInt(req.params.id)
      ) === -1
        ? "free"
        : "caught",
  });
});

collection.post("/catch", async (req, res) => {
  const { body } = req;
  collectionData.push(body);
  res.status(201).json({ success: true });
});

collection.delete("/release/:id", async (req, res) => {
  const toRemove = collectionData.findIndex(
    (pokemon) => pokemon.id === parseInt(req.params.id)
  );

  if (toRemove === -1)
    return res.status(404).json({ message: "No such pokemon in favorites!" });

  collectionData.splice(toRemove, 1);

  res.sendStatus(204);
});

module.exports = collection;
