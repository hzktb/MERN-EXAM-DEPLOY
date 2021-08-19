const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/pets", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Successfully connected to the Database!"))
  .catch((err) =>
    console.log("Oops, connection to database is not successful " + err)
  );
