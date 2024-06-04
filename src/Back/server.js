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
  const values = [req.body.name, req.body.mail, req.body.password];

  sql = "INSERT INTO users (`name`, `mail`, `password`) Values (?)";
  db.query(sql, [values], (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data), res.json(token);
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
  const values = [
    req.body.id_notes,
    req.body.name,
    req.body.note,
    req.body.date,
    req.body.mail
  ];
  sql = "INSERT INTO notes (`id_notes`,`name`, `note`, `date`,`mail`) Values (?)";
  db.query(sql, [values], (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

app.delete("/notes/:id_notes", async (req, res) => {
  const id = req.params.id_notes;
   const values = [
    req.body.id_notes,
    req.body.name,
    req.body.note,
    req.body.date,
    req.body.mail
  ]; 
  sql = `DELETE FROM notes WHERE id_notes = ? `;
  db.query(sql, [id], (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});



app.post("/notes/:id_notes", async (req, res) => {
  const id = req.params.id_notes;
   const name = req.body.name;
   const note = req.body.note;
   const date = req.body.date;
  
  sql =`UPDATE notes SET name = "${name}", note = "${note}", date = "${date}" WHERE id_notes = "${id}" `;
  db.query(sql, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

app.get("/fav", (req, res) => {
  const sql = "SELECT * FROM favbooks";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

app.post("/fav", (req, res) => {
  const values = [req.body.id, req.body.author, req.body.name, req.body.genre, req.body.year, req.body.annotation, req.body.image, req.body.mail ];
  sql = "INSERT INTO favbooks (`id_books`,`author`, `name`, `genre`, `year`, `annotation`, `image`, `mail` ) Values (?)";
  db.query(sql, [values], (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

app.delete("/fav/:id_books", async (req, res) => {
  const id = req.params.id_books;
  const mail = req.body.mail;
  //  const values = [
  //   req.body.id_books,
  //   req.body.name,
  //   req.body.note,
  //   req.body.date,
  //   req.body.mail
  // ]; 
  sql = `DELETE FROM favbooks WHERE id_books = ?`;
  db.query(sql, [id], (err, data) => {
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
