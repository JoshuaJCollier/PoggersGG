#!/user/bin/env node
const { readFileSync, writeFileSync } = require('fs');

const express = require('express');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get('/', (req, res) => {
	//const count = readFileSync('./count.txt', 'utf-8');
	//console.log('count', count)
	//const newCount = parseInt(count) + 1
	//writeFileSync('./count.txt', newCount);

	res.render('index');

	/*
	res.send(`

		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="utf-8" />
			<meta name ="viewport" content="width=device-width, initial-scale=1" />
			<title> poggers.gg </title>
		</head>
		<body>
			<h1>Welcome to poggers.gg</h1>
			<h2>This site has been visited ${newCount} times</h2>
		</body>
		</html>

	`);
	*/
});

app.listen(5000, () => console.log('http://localhost:5000/'));
