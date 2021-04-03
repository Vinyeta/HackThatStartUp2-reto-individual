const asteroidModel = require("./asteroid.model");

const create = async (req, res) => {
  const asteroidExists = await asteroidModel.getByFullname(req.body.full_name);
  if (asteroidExists) return res.status(400).json("Asteroid already exists");
  const newAsteroid = req.body;
  const asteroidCreated = asteroidModel.create(newAsteroid);
  return res.status(201).json(asteroidCreated);
};

const get = async (req, res) => {
  const asteroid = await asteroidModel.get(req.params.id);
  return res.status(200).json(asteroid);
};

const update = (req, res) => {
  const updatedAsteroid = req.body;
  const asteroidUpdated = asteroidModel.update(req.params.id, updatedAsteroid);
  return res.status(200).json(asteroidUpdated);
};

const remove = (req, res) => {
  const asteroidDeleted = asteroidModel.remove(req.params.id);
  return res.status(200).json(asteroidDeleted);
};

const findAll = async (req, res) => {
  const asteroids = await asteroidModel.findAll();
  return res.status(200).json(asteroids);
};

const addList = (req, res) => {
  const asteroidsCreated = asteroidModel.addList(req.body.asteroids);
  return res.status(200).json(asteroidsCreated);
};

module.exports = {
  create,
  update,
  get,
  remove,
  findAll,
  addList,
};
