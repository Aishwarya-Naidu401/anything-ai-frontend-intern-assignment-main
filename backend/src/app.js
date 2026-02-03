const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/auth", require("./routes/auth.routes"));
app.use("/api/v1", require("./routes/user.routes"));
app.use("/api/v1/tasks", require("./routes/task.routes"));

app.use(errorHandler);

module.exports = app;
