const mongoose = require('mongoose');

// Barebones store item
const itemSchema = mongoose.Schema({
	name: {type: String, required: true},
	picture: {type: String, required: true},
	price: {type: Number, required: true},
});

mongoose.model('Item', itemSchema);