import { Router } from "express";
import { Status } from "../models/status";
import { i18n } from "../constants/i18n";

const router = Router();

router.get("/", (req, res) => {
    res.status(400).json({ result: false, message: i18n.invalidRequest })
})

router.get(`/https/:target`, async (req, res) => {
    try {
        const target = `https://${req.params.target}` as string || '';
        
        const status = await new Status(target).getStatus();
        if (status === 200) {
            res.status(status).json({ result: true, message: i18n.operational });
        } else {
            res.status(status).json({ result: false, message: `${i18n.requestErrorCode} ${status}`});
        }
    } catch (error: any) {
        console.log(`${i18n.unexpectedError} ${error.message || ""}`);
        res.status(500).json({ result: false, message: `${i18n.unexpectedError} ${error.message || ""}`})
    }
})


router.get(`/http/:target`, async (req, res) => {
    try {
        const target = `http://${req.params.target}` as string || '';
        const statusRequest = new Status(target);
        const responseCode = await statusRequest.getStatus();
        if (responseCode === 200) {
            res.status(responseCode).json({ result: true, message: i18n.operational });
        } else {
            res.status(responseCode).json({ result: false, message: `${i18n.requestErrorCode} ${responseCode}`});
        }
    } catch (error: any) {
        console.log(`${i18n.unexpectedError} ${error.message || ""}`);
        res.status(500).json({ result: false, message: `${i18n.unexpectedError} ${error.message || ""}`})
    }
})

export default router;