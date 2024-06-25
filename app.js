require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const { initializeMongoConnection } = require("./databases/mongo");

const app = express();
const port = process.env.PORT;
initializeMongoConnection();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

/* routers */
const notificationRouter = require("./routes/notificationRouter");
app.use("/notifications", notificationRouter);

/* globalErrorHandling */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    staus: statusCode,
    message: err.message || "internal server error",
    errors: err.errors || [],
  });
});

// Run app
app.listen(port, () => {
  console.log(`Application is running on http://localhost:${port}`);
});
