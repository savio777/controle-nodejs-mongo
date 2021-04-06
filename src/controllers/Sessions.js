const UsersModels = require("../models/Users");

const { hash } = require("bcrypt");

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;

    try {
      // MUDAR DE LIB PARA HASH DE SENHA
      // PROBLEMA: hash criada não dá certo depois de um certo tempo mesmo com os mesmos caracteres
      // talvez essa lib usa timestamp na criação da hash

      const hashPassword = await hash(password, 8);

      const userLogged = await UsersModels.findOne({
        email,
        password: hashPassword,
      }).select("-password");

      console.log("pass ", hashPassword);

      if (!userLogged) {
        return res.status(460).json({ error: "User doesn't exist" });
      }

      return res.json(userLogged);
    } catch (error) {
      console.log("err ", error);
    }
  },
};
