const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

require("./config/mongoose.config");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/pets.routes")(app);

app.listen(port, () => console.log("now listening on http://localhost:8000"));
