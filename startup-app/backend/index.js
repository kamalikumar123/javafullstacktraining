// index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { Pool } = require("pg");

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Port from environment variable or default
const PORT = process.env.PORT || 5000;

// PostgreSQL pool configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Test database connection
pool.connect()
  .then(client => {
    console.log("Connected to PostgreSQL successfully!");
    client.release();
  })
  .catch(err => {
    console.error("Failed to connect to PostgreSQL:", err.message);
  });

// Root route to confirm backend is running
app.get("/", (req, res) => {
  res.send("Backend running successfully!");
});

// Example API route: get all users
app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error("Database query error:", err.message);
    res.status(500).json({ error: "Database error" });
  }
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).send({ error: "Route not found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
