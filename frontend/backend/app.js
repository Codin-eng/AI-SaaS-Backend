const express = require("express");
require("dotenv").config();

const authRoutes = require("./src/auth/auth.routes");
const clientRoutes = require("./src/clients/clients.routes");

const errorHandler = require("./src/middleware/error.middleware");
const limiter = require("./src/middleware/ratelimit");

const app = express();

app.use(express.json());
app.use(limiter);

app.use("/api/auth", authRoutes);
app.use("/api/clients", clientRoutes);

app.use(errorHandler);


module.exports = app;