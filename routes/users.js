const router = require('express').Router();

const {
  getUsers,
  getUserById,
  // createUser,
  updateUser,
  updateUserAvatar,
} = require('../controllers/users');

router.get('/', getUsers);
// router.post('/', createUser);
router.get('/:userId', getUserById);
router.patch('/me', updateUser);
router.patch('/me/avatar', updateUserAvatar);

module.exports = router;
