import { Router } from "express";
import { i18n } from "../constants/i18n"

const router = Router();

router.get("/", (req, res) => {
    res.status(400).json({ result: false, message: i18n.invalidRequest });
})

router.post("/", (req, res) => {
    res.status(400).json({ result: false, message: i18n.invalidRequest });
})

router.delete("/", (req, res) => {
    res.status(400).json({ result: false, message: i18n.invalidRequest });
})

router.patch("/", (req, res) => {
    res.status(400).json({ result: false, message: i18n.invalidRequest });
})

router.put("/", (req, res) => {
    res.status(400).json({ result: false, message: i18n.invalidRequest });
})

export default router;