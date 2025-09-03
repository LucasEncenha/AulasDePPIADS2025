import express from "express";

const hostname = '0.0.0.0';
const port = 4000;

const app = express();

app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}`);
});