// routes/api/books.js

const express = require('express');
const connectDB = require('../../config/default');
const router = express.Router();

const Sensor = require('../../models/Sensor');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.get('/', (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("fire");
    dbo.collection("temperature").find({}).toArray(function (err, result) {
      if (err) throw err;

      res.json(result); 
      db.close();
    });
  });
  
});
router.get('/temperature', (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("fire");
    dbo.collection("temperature").find({}).toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      db.close();
    });
  });
});
router.get('/humidity', (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("fire");
    dbo.collection("humidity").find({}).toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      db.close();
    });
  });
});
router.get('/mq', (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("fire");
    dbo.collection("mq").find({}).toArray(function (err, result) {
      if (err) throw err;

      res.json(result);
      db.close();
    });
  });
});
router.get('/bnmp', (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("fire");
    dbo.collection("mq").find({}).toArray(function (err, result) {
      if (err) throw err;

      res.json(result);
      db.close();
    });
  });
});
module.exports = router;