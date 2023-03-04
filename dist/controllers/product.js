"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleFavouriteProduct = exports.getFavouriteProducts = exports.getAllProducts = void 0;
const Product_1 = require("../models/Product");
const getAllProducts = async (req, res, next) => {
    const products = await Product_1.Product.find({});
    if (!products) {
        return res.status(204).json({ msg: 'No products found' });
    }
    //   res.json(products);
    res.status(200).json({ success: true, data: products });
};
exports.getAllProducts = getAllProducts;
const getFavouriteProducts = async (req, res, next) => {
    const products = await Product_1.Product.find({ isLiked: true });
    if (!products) {
        return res.status(204).json({ msg: 'No products found' });
    }
    //   res.json(products);
    res.status(200).json({ success: true, data: products });
};
exports.getFavouriteProducts = getFavouriteProducts;
const handleFavouriteProduct = async (req, res, next) => {
    console.log('req.params.id', req.params.id);
    //   const product = await Product.find({});
    const product = await Product_1.Product.find({
        _id: req.params.id,
    });
    console.log('product', product);
};
exports.handleFavouriteProduct = handleFavouriteProduct;
