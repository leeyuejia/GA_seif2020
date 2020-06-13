const Product = require('../models/products');
const mongoose = require('mongoose');

module.exports = {
    async getAll (req, res) {
        try {
            const items = await Product.find().exec();
            // return res.render('shop/index', { items });
            return res.status(200).json(items);
        } catch (err) {
            // return res.render('errors/404', { err });
            return res.status(500).json({
                message: 'Unable to fetch any data from DB: ' + err.message
            });
        }
    },
    async show (req, res) {
        const id = req.params.productId;
        try {
            const item = await Product.findById(id);
            if(item) {
                return res.status(200).json(item);
            } 
            return res.status(404).json({
                message: `This document with id ${id} is not available in my DB`
            });
        } catch (err) {
            // return res.render('errors/404', { err });
            return res.status(500).json({
                message: 'Unable to fetch the product for this id: ' + err.message
            });
        }
    },
    async create (req, res) {
        try {
            const product = new Product({
                _id: mongoose.Types.ObjectId(),
                name: req.body.name,
                price: req.body.price
            });
            const result = await product.save();
            return res.status(201).json(result);
        } catch (err) {
            // return res.render('errors/404', { err });
            return res.status(500).json({
                message: 'Unable to create this new product in DB: ' + err.message 
            });
        }
    },
    async getOneByName (req, res) {
        try {
            const item = await shopRepository.getOneByName(req.params.name);
            return res.render('shop/show', { item });
        } catch (err) {
            return res.render('errors/404', { err });
        }
    },
    async destroy (req, res) {
        const id = req.params.productId;
        try {
            const { deletedCount } = await Product.deleteOne({ _id: id });
            if(deletedCount) {
                return res.status(200).json({ deletedCount });
            } else {
                return res.status(404).json({ 
                    message: `Unable to find the product with id ${id}`    
                });
            }
        } catch(err) {
            return res.status(500).json({
                message: `Unable to delete this product with id ${id}`
            });
        }
    },
    async update (req, res) {
        const id = req.params.productId;
        try {
            const { nModified } = await Product.updateOne(
                { _id: id },
                {
                    $set: req.body
                }
            );
            if(nModified) {
                return res.status(202).json({ nModified });
            } else {
                return res.status(404).json({ 
                    message: `Unable to find the product with id ${id}`
                });
            }
        } catch (err) {
            return res.status(500).json({
                message: `Unable to update the product with id ${id}: ${err.message}` 
            });
        }
    }
};