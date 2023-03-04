import mongoose, { Schema, model, connect, Model, ObjectId } from 'mongoose';

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

const ProductSchema = new mongoose.Schema({
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

export type ProductDocument = mongoose.InferSchemaType<typeof ProductSchema>;

export const Product = mongoose.model<ProductDocument>(
  'Product',
  ProductSchema
);
