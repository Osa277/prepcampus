const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const authRoutes = require("./routes/authRoute");
const userInteraction = require("./routes/dashboardRoute");
const errMiddleware = require("./middleware/errorMiddleware");
const adminRoute = require("./routes/adminRoute");
const undefinedRoute = require("./middleware/undefinedRoute");
const MongoConnect = require("./config/DatabaseConfig");

app.use("/api/auth", authRoutes);
app.use("/api", userInteraction);
app.use("/api", adminRoute);
app.use(undefinedRoute);


app.use(errMiddleware);

app.listen(PORT, async () => {
  await MongoConnect(), console.log(`server is live at ${PORT}`);
});
