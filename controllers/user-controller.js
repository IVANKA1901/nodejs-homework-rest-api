const bcrypt = require("bcrypt");
require("dotenv").config();

const { User } = require("../models/user-model");
const { HttpError, ctrlWrapper } = require("../helpers");

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const result = await User.create({
    ...req.body,
    password: hashPassword,
  });
  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
    },
  });
};

module.exports = {
  registerUser: ctrlWrapper(registerUser),
};
