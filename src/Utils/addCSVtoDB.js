const csv = require("csvtojson");
const asteroidModel = require("../resources/Asteroid/asteroid.model");
CSV_PATH = "src/data/OrbitalParameters_PHAs.csv";

const addCSVtoDB = async () => {
  await csv()
    .fromFile(CSV_PATH)
    .then((json) => asteroidModel.addList(json));
};

module.exports = addCSVtoDB;
