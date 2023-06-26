const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => res
      .status(500)
      .send({
        message: 'Internal Server Error',
        err: err.message,
        stack: err.stack,
      }));
};

const createUser = (req, res) => {
  User.create(req.body)
    .then((user) => res.status(201).send(user))
    .catch((err) => res
      .status(500)
      .send({
        message: 'Internal Server Error',
        err: err.message,
        stack: err.stack,
      }));
};

const getUserById = (req, res) => {
  User.findById(req.params.userId)
    .orFail(() => new Error('Not found'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.message === 'Not found') {
        res
          .status(404)
          .send({
            message: 'User not found',
          });
      } else {
        res
          .status(500)
          .send({
            message: 'Internal Server Error',
            err: err.message,
            stack: err.stack,
          });
      }
    });
};

const updateUserFields = (req, res, updateFields) => {
  User.findByIdAndUpdate(
    req.user._id,
    updateFields,
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      } else {
        res.status(500).send({ message: 'На сервере произошла ошибка' });
      }
    });
};

const updateUser = (req, res) => {
  const { name, about } = req.body;
  updateUserFields(req, res, { name, about });
};

const updateUserAvatar = (req, res) => {
  const { avatar } = req.body;
  updateUserFields(req, res, { avatar });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  updateUserAvatar,
};
