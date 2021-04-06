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

  async delete(req, res) {
    const { id } = req.params;

    try {
      const userExist = await UsersModels.findOne({ _id: id });

      if (!userExist) {
        return res.json({ error: "User doesn't exist" });
      }

      await UsersModels.deleteOne({ _id: userExist._id });

      return res.json({ message: `User deleted: ${userExist.email}` });
    } catch (error) {
      console.log("err ", error);
    }
  },

  async update(req, res) {
    const { id } = req.params;

    const { name, email, password, permission } = req.body;

    try {
      const userExist = await UsersModels.findOne({ _id: id });

      if (!userExist) {
        return res.json({ error: "User doesn't exist" });
      }

      const hashPassword = await hash(password, 8);

      userExist.name = name;
      userExist.email = email;
      userExist.password = hashPassword;
      userExist.permission = permission;

      await userExist.save();

      return res.json(userExist);
    } catch (error) {
      console.log("err ", error);
    }
  },
};
