const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userModelSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userModelSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("UserModel", userModelSchema);

const create = (user) => {
  User.create(user, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("docs: ", docs);
    }
  });
};

const update = async (username, updatedUser) => {
  let query = { username: username };
  const salt = await bcrypt.genSalt();
  updatedUser.password = await bcrypt.hash(updatedUser.password, salt);
  User.updateOne(query, updatedUser, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("Updated Docs: ", docs);
    }
  });
};

const remove = (username) => {
  let query = { username: username };
  User.deleteOne(query, function (err, docs) {
    if (err) {
      console.log("error making request: ", err);
    } else {
      console.log("Deleted Docs: ", docs);
    }
  });
};

const findAll = async () => {
  return await User.find();
};

const addList = (users) => {
  User.insertMany(users);
};

const login = async (username, password) => {
  const query = { username: username };
  const user = await User.findOne(query);
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect username");
};

const getByUsername = async (username) => {
  const query = { username: username };
  try {
    return await User.findOne(query);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  create,
  update,
  remove,
  findAll,
  addList,
  login,
  getByUsername,
};
