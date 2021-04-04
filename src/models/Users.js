const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    permission: {
      type: String,
      default: "empregado",
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = model("Users", UserSchema);
