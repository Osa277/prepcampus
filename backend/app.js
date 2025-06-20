const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/DatabaseConfig")();

const app = express();
const PORT = process.env.PORT;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRoutes = require("./routes/authRoute");
const userInteraction = require("./routes/dashboardRoute");
const errMiddleware = require("./middleware/errorMiddleware");
const adminRoute = require('./routes/adminRoute')

app.use("/api/auth", authRoutes);
app.use("/api", userInteraction);
app.use('/api/admin', adminRoute);

app.listen(PORT);
app.use(errMiddleware);
