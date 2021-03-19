const { Router } = require("express");
const { getType, formatTypeData } = require("../utils/pokeAPI");

const type = Router();

type.get("/:name", async (req, res) => {
  try {
    const typeData = await getType(req.params.name);

    if (typeData.status === 404)
      return res.status(404).json({ message: "Type not found" });

    const strippedTypeData = formatTypeData(typeData);
    res.json(strippedTypeData);
  } catch (e) {
    console.log(e);
    res.json({ message: "Error ocurred", error: e.message });
  }
});

module.exports = type;
