const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const userRouter = express.Router();

userRouter.post('/reg', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const checkUser = await User.findOne({ where: { email } });
    if (!checkUser) {
      const hashedPass = await bcrypt.hash(password, 10);
      const newUser = await User.create({ name, email, password: hashedPass });
      req.session.userId = newUser.id;
      req.session.userName = newUser.name;
      res.json({ userName: newUser.name, userId: newUser.id });
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.error(err);
  }
});

userRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const currUser = await User.findOne({ where: { email } });
    const compare = await bcrypt.compare(password, currUser.password);
    if (compare) {
      req.session.userId = currUser.id;
      req.session.userName = currUser.name;
      res.json({ userName: currUser.name, userId: currUser.id });
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.error(err);
  }
});

userRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.sendStatus(200);
});
userRouter.post('/check', (req, res) => {
  if (req.session) {
    return res.json(req.session);
  }
  return res.sendStatus(401);
});

module.exports = userRouter;