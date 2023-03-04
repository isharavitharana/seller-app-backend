"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGODB_URI = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
if (fs_1.default.existsSync('.env')) {
    dotenv_1.default.config({ path: '.env' });
}
else {
    dotenv_1.default.config({ path: '.env.example' });
}
exports.MONGODB_URI = process.env['MONGODB_URI'];
if (!exports.MONGODB_URI) {
    console.log('No mongoDB connection string.');
}
