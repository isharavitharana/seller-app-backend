import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { Product } from '../models/Product';

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await Product.find({});
  if (!products) {
    return res.status(204).json({ msg: 'No products found' });
  }
  //   res.json(products);
  res.status(200).json({ success: true, data: products });
};
export const getFavouriteProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await Product.find({ isLiked: true });
  if (!products) {
    return res.status(204).json({ msg: 'No products found' });
  }
  //   res.json(products);
  res.status(200).json({ success: true, data: products });
};

export const handleFavouriteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    console.log('product', product);
    if (!product) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
