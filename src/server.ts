import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {machineController} from "./controller/MachineController";


const WebSocket = require('ws');
const app = express();
const ws = new WebSocket('ws://machinestream.herokuapp.com/ws');
const PORT = 1337;
// only in development ENV
app.use(cors({origin: '*'}));

app.get('/all', (req, res) => machineController.getAllMachineRecord(req, res));
app.get('/:machine_id', (req, res) => machineController.getMachineRecord(req, res));

ws.addEventListener("message", (event: MessageEvent) => {
    const {data} = event;
    machineController.setMachineRecord(data)
});

mongoose.connect(`mongodb://${process.env.REMOTE_USER}:${process.env.REMOTE_PASSWORD}@ds161710.mlab.com:61710/review-work`, { useNewUrlParser: true })
    .then(() => {
        console.log("Mongo connection was successful \n");
        app.listen(PORT, () => console.log(`Server is up: https://localhost:${PORT}`));
    })
    .catch((err) => {
        console.log(err);
    });
