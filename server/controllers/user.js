// imports
import { connectDB, closeConnectionDB } from "../db/index";
import { Auth, User } from "../db/userModel";
import jwt from "jsonwebtoken";

async function CreateUser(req, res) {
  const Db = connectDB();
  try {
    if (!Db) {
      res.status(500).json({ message: "fatail connection" });
    } else {
      const auth = new Auth({
        username: req.body.username,
        password: req.body.password
      });
      const validateAuth = auth.validateSync();
      if (validateAuth !== undefined) {
        res.status(406).json({ message: validateAuth.errors });
      } else {
        const insertAuth = await auth.save();
        const user = new User({
          name: req.body.name,
          identificationcard: req.body.identificationcard,
          birthdate: req.body.birthdate,
          city: req.body.city,
          auth: insertAuth
        });
        const validateUser = user.validateSync();
        if (validateUser !== undefined) {
          await insertAuth.remove();
          res.status(406).json({ message: validateUser.errors });
        } else {
          await user.save();
          const token = jwt.sign(
            { token: insertAuth._id },
            process.env.TOKEN_KEY,
            {
              expiresIn: "1 days"
            }
          );
          insertAuth.token = token;
          await insertAuth.save();
          res.status(201).json({ data: token });
        }
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  closeConnectionDB();
}

async function ListUser(req, res) {
  const Db = connectDB();
  try {
    if (!Db) {
      res.status(500).json({ message: "fatail connection" });
    } else {
      let user = await User.find().populate("auth");
      user = user.map(item => {
        const temp = Object.assign({}, item._doc);
        const auth = Object.assign({}, temp.auth._doc);
        delete auth._id;
        delete auth.token;
        delete auth.password;
        temp.auth = auth;
        return temp;
      });
      res.json({ data: user});
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  closeConnectionDB();
}
async function Login(req, res) {
  const Db = connectDB();
  try {
    if (!Db) {
      res.status(500).json({ message: "fatail connection" });
    } else {
      const auth = await Auth.findOne({ username: req.body.username });
      if (auth === null) {
        res.json({ message: "usuario no encontrado" });
      } else {
        if (auth.password === req.body.password) {
          const token = jwt.sign({ token: auth._id }, process.env.TOKEN_KEY, {
            expiresIn: "1 days"
          });
          auth.token = token;
          await auth.save();
          res.status(201).json({ data: token });
        } else {
          res.json({ message: "credenciales invalidas" });
        }
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  closeConnectionDB();
}

async function GetUser(req, res) {
  const Db = connectDB();
  try {
    if (!Db) {
      res.status(500).json({ message: "fatail connection" });
    } else {
      const auth = await Auth.findById(res.id);
      const user = await User.findOne({ auth });
      res.json({ data: user });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  closeConnectionDB();
}

export { CreateUser, ListUser, Login, GetUser };
