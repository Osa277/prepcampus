const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ 
  origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002", "http://localhost:3003", "http://localhost:3004"],
  credentials: true,
  optionsSuccessStatus: 200
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend server is running successfully!",
    timestamp: new Date().toISOString(),
    port: PORT
  });
});

const authRoutes = require("./routes/authRoute");
const userRoutes = require("./routes/userRoute");
const userInteraction = require("./routes/dashboardRoute");
const errMiddleware = require("./middleware/errorMiddleware");
const adminRoute = require("./routes/adminRoute");
const undefinedRoute = require("./middleware/undefinedRoute");
const MongoConnect = require("./config/DatabaseConfig");

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api", userInteraction);
app.use("/api", adminRoute);
app.use(undefinedRoute);


app.use(errMiddleware);

app.listen(PORT, "0.0.0.0", async () => {
  await MongoConnect(), console.log(`server is live at ${PORT} on all interfaces`);
});
