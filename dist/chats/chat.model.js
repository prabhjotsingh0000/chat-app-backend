"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatSchema = void 0;
const mongoose = require("mongoose");
exports.ChatSchema = new mongoose.Schema({
    members: { ref: 'User', type: (Array), required: true }
});
//# sourceMappingURL=chat.model.js.map