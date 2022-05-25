const bodyParser = require("body-parser");
const mysql = require("mysql");
const express = require('express');
const cors = require('cors');

const app = express()

const connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'pweb'
});

app.listen(5000, () => { console.log("App available on http://localhost:5000")})

//Middlewares for parser information
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/getNotes", function(request, response) {
    connection.query('SELECT * FROM notes;', function(error, results, fields) {
		return response.status(200).json(results)
	})
})

app.post('/insertNote', cors(), function(req, res) {

    let nota = req.body.nota;
    let dia = req.body.dia;

    console.log(nota, dia)
    connection.query('INSERT INTO notes (note, day, userId) VALUES ( ?, ?, ?);', [nota, dia, "1"], function(error, results, fields) {
        if (error) throw error;
        console.log("1 record inserted");
		return res.status(200).json(results)
	})
})

app.post('/removeNote', cors(), function(req, res) {

    let id = req.body.id;

    console.log("teste id: ", id)
    connection.query('DELETE FROM notes WHERE noteId=(?);', [id], function(error, results, fields) {        if (error) throw error;
        console.log("1 record deleted");
		return res.status(200).json(results)
	})
})
