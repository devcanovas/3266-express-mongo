import express from "express";

const app = express();
app.use(express.json());
const books = [
  {
    id: 1,
    title: "The Lord of Rings",
  },
  {
    id: 2,
    title: "Harry Potter",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Node.js course");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("Book registered successfully");
});

app.get("/books/:id", (req, res) => {
  let bookFounded = books.filter((book) => book.id === Number(req.params.id));
  bookFounded.length === 0
    ? res.status(200).json("Not Found")
    : res.status(200).json(bookFounded);
});

export default app;
