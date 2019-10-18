// imports
import { connectDB, closeConnectionDB } from "../db/index";
import jwt from "jsonwebtoken";
/*
async function isExistSubscriber(req, res, next) {
    const Db = connectDB();
    try {
        if (!Db) {
            res.status(500).json({ message: "fatail connection" })
        } else {
            const subscribers = await Subcrister.findById(req.params.id);
            if (subscribers === null) {
                return res.status(404).json({ message: 'Cant find subscriber' })
            }
            res.idData = subscribers;
            next();
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    closeConnectionDB();
}*/
async function getUserId(req, res, next) {
    const Db = connectDB();
    try {
        if (!Db) {
            res.status(500).json({ message: "fatail connection" })
        } else {
            const token = req.headers['access-token'];
            const id = jwt.verify(token,process.env.TOKEN_KEY);
            res.id = id.token;
            next();
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    closeConnectionDB();
}

export {
    getUserId
};
