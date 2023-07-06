const router = require('express').Router();
const { createUser, login } = require('../controllers/users');
const userRouter = require('./users');
const cardsRouter = require('./cards');

router.use('/cards', cardsRouter);
router.use('/users', userRouter);
router.post('/signup', createUser);
router.post('/signin', login);

module.exports = router;
