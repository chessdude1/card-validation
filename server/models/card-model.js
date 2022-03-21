const { Schema, model } = require('mongoose');

const CardSchema = new Schema({
    CVV: { type: Number, required: true },
    amount: { type: Number, required: true },
    cardNumber: { type: String, unique: true, required: true },
    expirationDate: { type: String, required: true },
})

module.exports = model('User', CardSchema);
