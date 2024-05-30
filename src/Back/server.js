const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const PORT = 8081;

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "rootbd",
  database: "bookshelf",
});

app.get("/books", (req, res) => {
  const sql = "SELECT * FROM books";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

app.post("/users", async (req, res) => {
  const values = [req.body.name, req.body.emails, req.body.password];
  sql = "INSERT INTO users (`name`, `mail`, `password`) Values (?)";
  db.query(sql, [values], (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

app.get("/notes", (req, res) => {
  const sql = "SELECT * FROM notes";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

app.post("/notes", async (req, res) => {
  const values = [req.body.id_notes, req.body.name, req.body.note, req.body.date];
  sql = "INSERT INTO cart (`id_notes`,`name`, `note`, `date`) Values (?)";
  db.query(sql, [values], (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

/*app.post("/notes", async (req, res) => {
    const values = [req.body.id, req.body.title, req.body.price, req.body.images0, req.body.count];
    sql = "INSERT INTO cart (`id`,`title`, `price`, `images0`, `count`) Values (?)";
    db.query(sql, [values], (err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    });
  });*/


app.listen(PORT, () => {
  console.log("listening");
});