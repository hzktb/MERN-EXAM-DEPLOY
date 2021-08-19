const Pets = require("../models/pets.model");

module.exports = {
  viewAll: (req, res) => {
    Pets.find()
      .then((allPets) => res.json(allPets))
      .catch((err) =>
        res.json({ message: "Oops, can not show the pets " + err })
      );
  },

  create: (req, res) => {
    const { name, petType, description, skill1, skill2, skill3 } = req.body;
    Pets.findOne({ name: name })
      .then((founded) => {
        if (founded === null) {
          Pets.create({
            name,
            petType,
            description,
            skill1,
            skill2,
            skill3,
          })
            .then((newPet) => res.json(newPet))
            .catch((err) => {
              res.status(400).json(err);
            });
        } else {
          res.status(400).json({
            uniqueNameMessage: "The name is taken, choose a different name",
          });
        }
      })
      .catch((err) => console.log(err));
  },

  findOne: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    Pets.findOne({ $or: [{ _id: id }, { name: name }] })
      .then((pet) => res.json(pet))
      .catch((err) => res.json({ message: "Can not find the pet " + err }));
  },

  update: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    Pets.findOne({ name: name })
      .then((founded) => {
        // if found the pet, check the id, if same id, then updating the same pet, if id doesnt match, it means the pet already exists and no update
        if (founded._id == id || founded == null) {
          Pets.findOneAndUpdate({ _id: id }, req.body, {
            upsert: true,
            new: true,
            runValidators: true,
          })
            .then((updated) => res.json(updated))
            .catch((err) => res.status(400).json(err));
        } else {
          res
            .status(400)
            .json({ uniqueNameMessage: "The pet's name must be unique" });
        }
      })
      .catch((err) =>
        // didnt find the pet by the name, update the current pet based on id
        Pets.findOneAndUpdate({ _id: id }, req.body, {
          upsert: true,
          new: true,
          runValidators: true,
        })
          .then((updated) => res.json(updated))
          .catch((err) => res.status(400).json(err))
      );
  },

  delete: (req, res) => {
    const { id } = req.params;
    Pets.deleteOne({ _id: id })
      .then((result) => res.json(result))
      .catch((err) => res.json({ message: "Deletion failed " + err }));
  },
};
