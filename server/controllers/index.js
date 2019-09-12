// imports
import { connectDB, closeConnectionDB } from '../db/index';

/*
async function raizList(req, res) {
    const Db = connectDB();
    try {
        if (!Db) {
            res.status(500).json({error: "fatail connection"})
        } else {
            const subscribers = await Subcrister.find();
            res.json(subscribers);
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    closeConnectionDB();
}

async function raizSave(req, res) {
    const Db = connectDB();
    try {
        if (!Db) {
            res.status(500).json({error: "fatail connection"});
        } else {
            const subscribers = new Subcrister({
                name: req.body.name,
                subscribedChannel: req.body.subscribedChannel
            });
            const newSubscriber = await subscribers.save();
            res.status(201).json(newSubscriber);
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
    closeConnectionDB();
}
async function raizDelete(req, res) {
    const Db = connectDB();
    try {
        if (!Db) {
            res.status(500).json({error: "fatail connection"});
        } else {
            await res.idData.remove();
            res.json({message: 'Delete this Subscriber'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    closeConnectionDB();
}
async function raizUpdate(req, res) {
    const Db = connectDB();
    try {
        if (!Db) {
            res.status(500).json({error: "fatail connection"});
        } else {
            if (req.body.name !== null) {res.idData.name = req.body.name;}
            if (req.body.subscribedChannel !== null) {res.idData.subscribedChannel = req.body.subscribedChannel;}
            const updateSubscribers = await res.idData.save();
            res.json(updateSubscribers);
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
    closeConnectionDB();
}*/

export {
    /*
    raizList,
    raizSave,
    raizDelete,
    raizUpdate*/
}