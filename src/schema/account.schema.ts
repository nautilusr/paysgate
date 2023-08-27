import { Schema, model } from "mongoose";

const accountSchema = new Schema({
  username:         { type: String, required: true },
  password:         { type: String, required: true },
  account_number:   { type: String, required: true },
  sessionId:        { type: String, required: false },
  mobileId:         { type: String, required: false },
  clientId:         { type: String, required: false },
  cif:              { type: String, required: false },
  E:                { type: String, required: false },
  res:              { type: Object, required: false },
  tranId:           { type: String, required: false },
  browserToken:     { type: String, required: false },
  browserId:        { type: String, required: false },
  bid:              { type: String, required: false },
  bankCode:         { type: String, required: false },
  bankName:         { type: String, required: false },
  isActive:         { type: Boolean, default: true },
  type:             { type: String },
  token:            { type: String, required: false },
  accessToken:      { type: String, required: false },
  authToken:        { type: String, required: false },
});

export default model("account", accountSchema, "account");
