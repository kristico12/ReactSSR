// imports
import { connectDB, closeConnectionDB } from "../db/index";
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

export //isExistSubscriber
{};
