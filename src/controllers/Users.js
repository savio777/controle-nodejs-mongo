const UsersModels = require("../models/Users");

module.exports = {
  async store(req, res) {
    const { name, email, password, permission } = req.body;

    const userExist = await UsersModels.findOne({ email });

    if (userExist) {
      return res.json(userExist);
    }

    const newUser = await UsersModels.create({
      name,
      email,
      password,
      permission,
    });

    res.json(newUser);
  },
};
