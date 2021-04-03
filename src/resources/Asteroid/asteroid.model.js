const mongoose = require('mongoose');

const asteroidModelSchema = mongoose.Schema({
    full_name: {
        type: String,
        required: true,
    },
    a: {
        type: Number,
        required: true,
    },
    e: {
        type: Number,
        required: true,
    },
    i: {
        type: Number,
        required: true,
    },
    om: {
        type: Number,
        required: true,
    },
    w: {
        type: Number,
        required: true,
    },
    ma: {
        type: Number,
        required: true,
    }
});

const Asteroid = mongoose.model('AsteroidModel', asteroidModelSchema);

const create = (asteroid) => {
    Asteroid.create(asteroid, function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            console.log('Created docs: ', docs);
        }
    });
};

const get = async (id) => {
    return await Asteroid.findById(id);
};

const update = (id, updatedAsteroid) => {
    let query = { _id: id };
    Asteroid.updateOne(query, updatedAsteroid, function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            console.log("Updated Docs: ", docs);
        }
    });
};

const remove = (id) => {
    let query = { _id: id };
    Asteroid.deleteOne(query, function (err, docs) {
        if (err) {
            console.log('error making request: ', err);
        } else {
            console.log("Deleted Doc: ", docs);
        }
    });
};

const findAll = async () => {
    return await Asteroid.find();
};

const addList = (asteroids) => {
    Asteroid.insertMany(asteroids)
};

const getByFullname = async (fullname) => {
    const query = { full_name: fullname };
    try {
    return await Asteroid.findOne(query);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    create,
    get,
    update,
    remove,
    findAll,
    addList,
    getByFullname
}