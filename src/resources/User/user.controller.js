const userModel = require("./user.model");

const get = async (req, res) => {
  const user = await userModel.getByUsername(req.params.username);
  return res.status(200).json(user);
};

const update = (req, res) => {
  const updatedUser = req.body;
  const userUpdated = userModel.update(req.params.username, updatedUser);
  return res.status(200).json(userUpdated);
};

const remove = (req, res) => {
  const userDeleted = userModel.remove(req.params.username);
  return res.status(200).json(userDeleted);
};

const findAll = async (req, res) => {
  const users = await userModel.findAll();
  return res.status(200).json(users);
};

const addList = (req, res) => {
  const usersCreated = userModel.addList(req.body.users);
  return res.status(200).json(usersCreated);
};

module.exports = {
  update,
  get,
  remove,
  findAll,
  addList,
};
