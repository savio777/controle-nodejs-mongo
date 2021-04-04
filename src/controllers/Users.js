const UsersModels = require("../models/Users");

const { hash } = require("bcrypt");

module.exports = {
  async store(req, res) {
    const { name, email, password, permission } = req.body;

    const userExist = await UsersModels.findOne({ email });

    if (userExist) {
      userExist.password = undefined;

      return res.json(userExist);
    }

    const hashPassword = await hash(password, 8);

    const newUser = await UsersModels.create({
      name,
      email,
      password: hashPassword,
      permission,
    });

    newUser.password = undefined;

    res.json(newUser);
  },
};
