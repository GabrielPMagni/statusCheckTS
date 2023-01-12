import express from "express";
import status from "./routes/status"
import index from "./routes/index"

const app = express();
const port = 3500;

app.use("/public", express.static(`${__dirname}/public`));
app.use("/status", status);
app.use("/", index);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})