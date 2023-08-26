import express from 'express';
import { bankInController } from '../controller/bankIn';
import { bankOutController } from '../controller/bankOut';

const publicRouter = express.Router();
publicRouter.get('/GET_ACTIVE_BANKS', async (req: any, res: any) => { bankInController.GET_ACTIVE_BANKS(req, res) });
publicRouter.post('/B_REQUEST_PAY_IN', async (req: any, res: any) => { bankInController.B_REQUEST_PAY_IN(req, res) });
publicRouter.get('/B_REQUEST_BANK_LIST'), async (req: any, res: any) => { bankOutController.B_REQUEST_BANK_LIST(req, res) };
publicRouter.post('/B_REQUEST_PAY_OUT', async (req: any, res: any) => { bankOutController.B_REQUEST_PAY_OUT(req, res) });

publicRouter.post('/test', async (req: any, res: any) => {
    console.log(req.body)
    res.status(200).json({ message: 'ok' });
});

export default publicRouter;
