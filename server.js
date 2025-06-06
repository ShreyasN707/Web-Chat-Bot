const express = require('express')
const app = express();

const path = require("path");

require('dotenv').config();
const PORT = process.env.PORT || 4000;


//ejs engine setup
app.set("view engine", "ejs");
app.set('views', path.resolve("./views"))


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
const { router } = require("./routes/mainroute");
app.use("/", router);


app.listen(PORT, () => console.log(`Server running at: ${PORT}`))