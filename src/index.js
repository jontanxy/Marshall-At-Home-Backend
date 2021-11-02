const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middlewares
const middlewares = require("./api/v1/middlewares/index_middlewares");


// Routes
const example = require("./api/v1/routes/index_routes");

app.use("/example", example);

// Default get request
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World🌎, this is your captain speaking... 🛸",
  });
});

app.use(middlewares.errorHandler);
app.use(middlewares.pathNotFound);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

module.exports = { app };
