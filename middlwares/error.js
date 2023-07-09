const errorHandler = (err, req, res, next) => {
  const { statusCode = 500 } = 500;
  const message = statusCode === 500 ? 'Произошла ошибка на сервере' : err.message;
  res.status(statusCode).send({ message });

  next();
};

module.exports = errorHandler;
