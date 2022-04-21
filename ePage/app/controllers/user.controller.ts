const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req: any, res: any) => {
  if (!req.body.firstName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a User
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };
  // Save User in the database
  User.create(user)
    .then((data: typeof user) => {
      res.send(data);
    })
    .catch((err: any) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    });
};
// Retrieve all Users from the database.
exports.findAll = (req: any, res: any) => {
  const firstName = req.query.firstName;
  var condition = firstName ? { name: { [Op.like]: `%${firstName}%` } } : null;
  User.findAll({ where: condition })
    .then((data: any) => {
      res.send(data);
    })
    .catch((err: any) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};
// Find a single User with an id
exports.findOne = (req: any, res: any) => {
  const id = req.params.id;
  User.findByPk(id)
    .then((data: any) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`,
        });
      }
    })
    .catch((err: any) => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id,
      });
    });
};
// Update a User by the id in the request
exports.update = (req: any, res: any) => {
  const id = req.params.id;
  User.update(req.body, {
    where: { id: id },
  })
    .then((num: number) => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
        });
      }
    })
    .catch((err: any) => {
      res.status(500).send({
        message: "Error updating User with id=" + id,
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req: any, res: any) => {
  const id = req.params.id;
  User.destroy({
    where: { id: id },
  })
    .then((num: number) => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`,
        });
      }
    })
    .catch((err: any) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};

// Delete all Users from the database.
exports.deleteAll = (req: any, res: any) => {
  User.destroy({
    where: {},
    truncate: false,
  })
    .then((nums: number) => {
      res.send({ message: `${nums} Users were deleted successfully!` });
    })
    .catch((err: any) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all users.",
      });
    });
};

export {};
