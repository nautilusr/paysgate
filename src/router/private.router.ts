import express from 'express';
import AccountSchema from '../schema/account.schema';

const privateRouter = express.Router();

privateRouter.get('/account', async (req, res) => {
    const { username, password, account_number } = req.query;
    const data = await AccountSchema.findOne({ username, password, account_number });
    res.status(200).json(data);
});

privateRouter.post('/account', async (req, res) => {
    const data = req.body;
    const message = await AccountSchema.findOneAndUpdate({ username: data.username }, data, { upsert: true });
    console.log(message);
    res.status(200).json(message);
});

privateRouter.post('/test', async (req, res) => {
    // console.log(req.body)
    res.status(200).json({ message: 'ok' });
});

export default privateRouter;
