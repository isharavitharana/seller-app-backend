"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// export interface ProductType {
//   _id: string;
//   name: string;
//   image_url: string;
//   price: string;
//   description?: string;
//   likes?: number;
//   tags?: [];
//   isLiked: boolean;
//   seller_name: string;
//   seller_id: string;
// }
const ProductSchema = new mongoose_1.default.Schema({
    // _id: { type: String, required: true },
    // _id: ObjectId,
    name: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    likes: {
        type: Number,
    },
    tags: {
        type: [{ type: String }],
    },
    isLiked: {
        required: true,
        type: Boolean,
    },
    seller_name: {
        type: String,
        required: true,
    },
    seller_id: {
        type: String,
        required: true,
    },
});
exports.Product = mongoose_1.default.model('Product', ProductSchema);
