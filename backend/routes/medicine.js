const express = require("express");
const router = express.Router();
const Medicine = require("../models/medicine.model");
const authenticate = require("../middleware/authentication");

// Add Medicine
router.post('/add', authenticate, async (req, res, next) => {

	let userID = req.user._id;

	try {
		const medicine = new Medicine({
			userID: userID,
			medicineName: req.body.medicineName,
			medicineTime: req.body.medicineTime,
			medicineQuantity: req.body.medicineQuantity
		})

		const result = await medicine.save()
		res.status(200).json({medicine: result})

	} catch (err) {
		console.log(err);
		res.status(500).json({error: "Error occurred while saving"});
	}
})

// Get all the medicine for a particular user
router.get('/all', authenticate, async (req, res, next) => {
	let userID = req.user._id;

	try {
		const medicines = await Medicine.find({userID: userID})
		res.status(200).json({medicines: medicines})

	} catch (err) {
		console.log(err)
		res.status(500).json({error: 'Error occurred while fetching'})
	}
})

// Change a medicine
router.put("/change", authenticate, async (req, res) => {
	try {
		await Medicine.findByIdAndUpdate({
			_id: req.body._id
		}, {
			medicineName: req.body.medicineName,
			medicineTime: req.body.medicineTime,
			medicineQuantity: req.body.medicineQuantity
		})

		const updatedMedicine = await Medicine.findById({
			_id: req.body._id
		});
		res.status(200).json({
			medicine: updatedMedicine
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			error: "Error occurred while updating"
		});
	}
});

// Delete a medicine
router.delete('/delete/:id', authenticate, async (req, res) => {
	try {
		await Medicine.findByIdAndDelete({
			_id: req.params.id
		})
		res.status(200).json({
			message: "Deleted successfully"
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({
			error: 'Error occurred while deleting'
		})
	}
});

module.exports = router;