"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSchema = void 0;
const mongoose = require("mongoose");
exports.MessageSchema = new mongoose.Schema({
    chat_id: { ref: 'Chat', type: String, required: true },
    sender_id: { ref: 'User', type: String, required: true },
    message: { type: String, required: true }
});
//# sourceMappingURL=message.model.js.map