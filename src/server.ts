import express from "express";
import status from "./routes/status";
import index from "./routes/index";
import domain from "./routes/domains"

const app = express();
const port = 3500;

app.use("/", index);
app.use("/public", express.static(`${__dirname}/public`));
app.use("/status", status);
app.use("/domains", domain);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})