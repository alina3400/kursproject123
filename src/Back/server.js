const express = require('express');
const mysql= require('mysql');
const cors = require('cors');
const PORT = 8082;



const app = express();
app.use(cors());


const db= mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'rootbd',
    database: ''
})


app.get('/', (req, res) =>{
    const sql = "SELECT * FROM _";
    db.query(sql, (err, data)=>{
        if(err)
        {
            return res.json(err);
        }
        else
        {
            return res.json(data);
        }
        
    })
})


app.listen(PORT, ()=>{
    console.log("listening");
})