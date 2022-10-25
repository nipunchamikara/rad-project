const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({

	userID: {
		type: String,
		required: true
	},
	medicineName: {
		type: String,
		required: true
	},
	medicineTime: {
		type: String,
		required: true
	},
	medicineQuantity: {
		type: Number,
		required: false
	}
})

const Medicine = mongoose.model('medicine', MedicineSchema)
module.exports = Medicine