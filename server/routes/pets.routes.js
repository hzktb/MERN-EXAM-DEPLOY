const PetController = require("../controllers/pets.controller");

module.exports = (app) => {
  app.get("/api/pets/all", PetController.viewAll);
  app.get("/api/pets/:id", PetController.findOne);
  app.post("/api/pets/new", PetController.create);
  app.put("/api/pets/:id/edit", PetController.update);
  app.delete("/api/pets/delete/:id", PetController.delete);
};
