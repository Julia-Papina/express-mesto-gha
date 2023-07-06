const router = require('express').Router();
const { createUser, login } = require('../controllers/users');
const auth = require('../middlwares/auth');
const userRouter = require('./users');
const cardsRouter = require('./cards');

router.post('/signup', createUser);
router.post('/signin', login);

router.use(auth);

router.use('/cards', cardsRouter);
router.use('/users', userRouter);

module.exports = router;
