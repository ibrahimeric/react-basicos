const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express()
app.use(cors())
app.use(bodyParser.json({limit: '10mb'}))


app.get('/', function(req, res){
    res.send('Primera ruta de la Api')
})

const credentials = {
    host: 'localhost',
    user: 'pruebaApi',
    password: '',
    database: 'materias'
}

const secret = process.env.SECRET

app.post('/token', (req, res) => {
    const {sub, name} = {id: 'abc', name: '123'}
    const token = jwt.sign({
        sub,
        name,
        exp: Date.now() + 10 * 1000
    }, secret)

    res.send({token})
})

app.get('/private', (req, res) => {
    try{
        const token = req.headers.authorization.split(' ')[1]
        const payload = jwt.verify(token, secret)

        if(Date.now() > payload.exp){
            return res.status(401).send({ error: 'token expired'})
        }
        res.send('Page private')
    } catch (error) {
        res.status(401).send({error: error.message})
    }
})

app.post('/api/register', (req, res) => {
    const {username, password} = req.body
    const values = [username, password]
    var connection = mysql.createConnection(credentials)
    connection.query('insert into usuarios values(?,?)',values , (error, result) => {
        if (error)
            res.status(500).send(error)
        else
        res.status(200).send(result)
    })
    connection.end()
})

app.get('/usuarios', (req, res) => {
    var connection = mysql.createConnection(credentials)
    connection.query('SELECT * FROM usuarios', (error, result) => {
        if (error)
            res.status(500).send(error)
        else
        res.status(200).send(result)
    })
    connection.end()
})

app.post('/api/login', (req, res) => {
    const {username, password} = req.body
    const values = [username, password]
    var connection = mysql.createConnection(credentials)
    connection.query("select * from usuarios where usuario = ? and contraseña = ?", values, (err, result) => {
        if(err){
            res.status(500).send(err)
        }else{
            if(result.length > 0){
                const token = jwt.sign({
                    username,
                    password,
                    exp: Date.now() + 10 * 1000
                }, secret)

                res.status(200).send({token})
            }else{
                res.send('false')
            }
        }
    })
    connection.end()
})

app.listen('5000', () =>{
    console.log('Aplicación iniciada en el puerto 5000')
})
