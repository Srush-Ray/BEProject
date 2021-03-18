require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const fileUpload = require("express-fileupload");

const port = process.env.PORT;

app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.json({ hello: "World" }));
app.use("/firstpipeline", routes.firstpipeline);

app.listen(port, console.log(`Server started on port ${port}`));
