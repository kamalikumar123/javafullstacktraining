
//node .js
// Node.js is a JavaScript runtime environment.
// Runs JavaScript outside the browser using Google V8 Engine.
// Used for backend development: APIs, servers, real-time apps.

console.log("Node.js Demo Started!\n");

//  NPM (NODE PACKAGE MANAGER)
// Used to install external packages like express, nodemon, axios, etc.
// Common Commands:
// npm init -y
// npm install express
// npm install nodemon --save-dev
// npm uninstall package

console.log("NPM manages project dependencies.\n");

// NODE.JS CORE MODULES
// Core modules come built-in with Node.js.
// Examples: fs, path, os, http, events

const fs = require("fs");
const path = require("path");
const os = require("os");
const http = require("http");
const EventEmitter = require("events");

// FS MODULE EXAMPLE - File handling
fs.writeFileSync("demo.txt", "Hello from Node.js core modules!");
const content = fs.readFileSync("demo.txt", "utf-8");
console.log("FS Module (File Content):", content);

// PATH MODULE EXAMPLE
console.log("Path Module (Extension):", path.extname(__filename));

// OS MODULE EXAMPLE
console.log("OS Module (CPU Count):", os.cpus().length);
console.log("OS Module (Free RAM):", os.freemem(), "\n");


// EVENT-DRIVEN ARCHITECTURE
// Node.js runs on an Event Loop → everything happens using Events.
// Example: request event, timer event, file event.

const emitter = new EventEmitter();

emitter.on("start", () => {
  console.log("EventEmitter: Start event triggered!");
});

emitter.emit("start");
console.log(""); // spacing

// NPM PACKAGES
// Installed through NPM, stored in node_modules folder.
// Examples: express, mongoose, axios, cors, nodemon.

// express is installed using:
// npm install express

console.log("NPM Packages allow using external libraries.\n");

// PROJECT SETUP STEPS (Explained)
// mkdir myapp
// cd myapp
// npm init -y
// create index.js
// node index.js

console.log("Node.js project setup completed.\n");

// EXPRESS.JS BASICS
// Express is a minimal web framework to create servers & APIs.
// Helps in routing, middleware, and handling HTTP requests.

const express = require("express");
const app = express();
app.use(express.json()); // to read JSON body

// Basic Route
app.get("/", (req, res) => {
  res.send("Express Server is Running!");
});

// EXPRESS ROUTING
// Routing = deciding which endpoint handles which request.

// GET ROUTE
app.get("/users", (req, res) => {
  res.send("GET: Fetch all users");
});

// POST ROUTE
app.post("/add", (req, res) => {
  res.send("POST: User added successfully");
});

// DYNAMIC ROUTE
app.get("/user/:id", (req, res) => {
  res.send("User ID: " + req.params.id);
});

// REST API FUNDAMENTALS
// REST API allows client & server communication using HTTP methods.
// HTTP METHODS:
// GET → Read data
// POST → Create data
// PUT → Update whole data
// PATCH → Update partial data
// DELETE → Remove data

app.delete("/delete/:id", (req, res) => {
  res.send("User Deleted: " + req.params.id);
});

// START EXPRESS SERVER
app.listen(3001, () => {
  console.log("REST API running on http://localhost:3001");
  console.log("Node.js Demo Completed Successfully!");
});
