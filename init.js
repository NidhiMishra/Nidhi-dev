require('dotenv/config');
const mysql = require('mysql');
const util = require('util');

//Make Connection
const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
});

//Pormisfy query
const query = util.promisify(db.query).bind(db);

//Connect to DB
db.connect((err) => {
	if (err) {
		return console.log(err.message);
	}
});

//Log on connect to check connection success
db.on('connect', () => console.log('Connected to DB'));

//Create the Database if it doesn't exist
db.query('CREATE DATABASE IF NOT EXISTS nidhi_task', (err, result) => {
	if (err) {
		return console.log(err.message);
	}

	console.log('Databse nidhi_task created successfully');
});

//Select the database
db.query('USE nidhi_task', (err, result) => {
	if (err) {
		return console.log(err.message);
	}

	console.log('Databse nidhi_task is now selected');
});

//Create the DB tables if they don't exist
db.query(
	'CREATE TABLE IF NOT EXISTS user (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, email VARCHAR(100) NOT NULL, password VARCHAR(100) NOT NULL)',
	(err, result) => {
		if (err) {
			return console.log(err.message);
		}

		console.log('Created the user table');
	}
);
db.query(
	'CREATE TABLE IF NOT EXISTS country_detail (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, countryName VARCHAR(255) UNIQUE NOT NULL, GMTOffset VARCHAR(100) UNIQUE NOT NULL)',
	(err, result) => {
		if (err) {
			return console.log(err.message);
		}

		console.log('Created the countryDetail table');
	}
);

module.exports.db = db;
module.exports.query = query;
