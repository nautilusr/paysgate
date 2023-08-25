import { Schema, model } from "mongoose";

const GateSchema = new Schema({
    gate:           { type: String, required: true },
    api_key:        { type: String, required: true },
    pin:            { type: String, required: true },
    time:           { type: String, default: new Date() },
    isActive:       { type: Boolean, default: true },
});

export default model("gate", GateSchema, "gate");
