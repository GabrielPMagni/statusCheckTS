import { Router } from "express";
import { i18n } from "../constants/i18n";
import { isValidURL } from "../constants/typeChecking";
import { Domain } from "../models/domain";

const router = Router();

router.get("/", (req, res) => {
    res.status(400).json({ result: false, message: i18n.invalidRequest });
})

router.post("/", async (req, res) => {
    try {
        if (req.body.url && isValidURL(req.body.url)) {
            const response = await new Domain().insert(req.body.url);
            res.status(201).json({ result: true, message: response });
        } else {
            res.status(400).json({ result: false, message: i18n.invalidURL })
        }
    } catch (error) {
        res.status(400).json({ result: false, message: i18n.invalidRequest })
    }
})

router.get("/:id", async (req, res) => {
    try {
        if (!isNaN(+req.params.id)) {
            const response = await new Domain().selectById(+req.params.id);
            res.status(200).json({ result: true, message: response });
        } else {
            res.status(404).json({ result: false, message: i18n.notFound });
        }
    } catch (error) {
        console.log(error);
        
        res.status(400).json({ result: false, message: error })
    }
})

router.get("/page/:page", (req, res) => {

})

router.get("/all", (req, res) => {

})


export default router;