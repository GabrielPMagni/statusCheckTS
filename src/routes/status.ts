import { Router } from "express";
import { Status } from "../models/status";
import { i18n } from "../constants/i18n";

const router = Router();

router.get("/", (req, res) => {
    res.status(400).json({ result: false, message: i18n.invalidRequest })
})

router.get(`/https/:target`, async (req, res) => {
    const target = `https://${req.params.target}` as string || '';
    
    const status = await new Status(target).getStatus();
    if (status === 200) {
        res.status(status).json({ result: true, message: i18n.operational });
    } else {
        res.status(status).json({ result: false, message: `${i18n.requestErrorCode} ${status}`});
    }
})


router.get(`/http/:target`, async (req, res) => {
    const target = `http://${req.params.target}` as string || '';
    
    const status = await new Status(target).getStatus();
    if (status === 200) {
        res.status(status).json({ result: true, message: i18n.operational });
    } else {
        res.status(status).json({ result: false, message: `${i18n.requestErrorCode} ${status}`});
    }
})

export default router;