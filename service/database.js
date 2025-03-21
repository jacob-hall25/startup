const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.username}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('cinevaluate');
const userCollection = db.collection('user');
const ratingCollection = db.collection('rating');


(async function testConnection() {
    try {
        await db.command({ ping: 1 });
        console.log('Connected to the database');
    } catch (ex) {
        console.log(`Unable to connect to database with ${url} because ${ex.message}`);
        process.exit(1);
    }
})();

function getUser(email) {
    return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function addUser(user) {
    await userCollection.insertOne(user);
}

async function updateUser(user) {
    await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addRating(rating) {
    await ratingCollection.insertOne(rating);
}

async function getRatings() {
    return ratingCollection.find().toArray();
}

module.exports = {
    getUser,
    getUserByToken,
    addUser,
    updateUser,
    addRating,
    getRatings
};