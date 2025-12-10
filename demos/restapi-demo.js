const express = require("express");
const app = express();

app.use(express.json());

let items = [
    { id: 1, name: "Pen" },
    { id: 2, name: "Book" }
];

app.get("/items", (req, res) => res.json(items));

app.post("/items", (req, res) => {
    const item = { id: items.length + 1, name: req.body.name };
    items.push(item);
    res.json(item);
});

app.delete("/items/:id", (req, res) => {
    items = items.filter(i => i.id != req.params.id);
    res.send("Item deleted");
});

app.listen(4001, () => console.log("REST API on port 4001"));
