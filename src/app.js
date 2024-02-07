import express from "express";
import { connectDatabase } from "./config/dbConnect.js";

const connection = await connectDatabase();

connection.on("error", (error) => {
  console.error("Connection error", error);
})

connection.once("open", () => {
  console.log("Connection with database was successfully!")
})

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
  let bookFounded = filterBooks(req.params.id);
  res.status(200).json(bookFounded);
});

app.put("/books/:id", (req, res) => {
  const index = findBookIndex(req.params.id);
  books[index].title = req.body.title;
  res.status(200).json(books);
});

app.delete("/books/:id", (req, res) => {
  const index = findBookIndex(req.params.id);
  books.splice(index, 1);
  res.status(200).json({ status: "200", message: "Book deleted successfully"})
})

function filterBooks(id) {
  return books.filter((book) => book.id === Number(id));
}

function findBookIndex(id) {
  return books.findIndex((book) => book.id === Number(id));
}

export default app;
