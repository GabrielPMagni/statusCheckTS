import express from "express";
import * as dotenv from "dotenv";
import status from "./routes/status"
import index from "./routes/index"

dotenv.config()

const app = express();
const port = process.env.EXECUTION_PORT || 3000;

app.use("/status", status);
app.use("/", index);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})