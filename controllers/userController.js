const data = require("../models/user");

module.exports = {
  getAllUser: async (req, res) => {
    console.log(data);
    // const users = await User.findAll();
    // console.log(users);
    // res.json({
    //   message: "success",
    //   data: users,
    // });
  },

  // getUserById: async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const user = await User.findOne({ where: { id } });
  //     res.json({ user });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },

  // createUser: async (req, res) => {
  //   try {
  //     const { username, email, password } = req.body;
  //     const user = await User.create({ username, email, password });
  //     res.json({ user });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
};
