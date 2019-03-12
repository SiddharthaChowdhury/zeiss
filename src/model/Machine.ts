import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

let MachineSchema = new Schema({
    machine_id: {type: String, required: true},
    id: {type: String, required: true},
    timestamp: {type: String, required: true},
    status: {type: String, required: true},
});

module.exports = mongoose.model('Machine', MachineSchema);