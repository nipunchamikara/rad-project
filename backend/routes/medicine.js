const express = require("express");
const router = express.Router();
const Medicine = require("../models/medicine.model");
const authenticate = require("../middleware/authentication");

// Add Medicine
router.post("/add", authenticate, async (req, res, next) => {
  let userID = req.user._id;
  const { medicineName, medicineTime, medicineQty } = req.body;

  try {
    const medicine = new Medicine({
      userID: userID,
      medicineName,
      medicineTime,
      medicineQty,
    });

    const result = await medicine.save();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error occurred while saving" });
  }
});

// Get all the medicine for a particular user
router.get("/all", authenticate, async (req, res, next) => {
  let userID = req.user._id;

  try {
    const medicines = await Medicine.find({ userID: userID });
    res.status(200).json(medicines);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error occurred while fetching" });
  }
});

// Change a medicine
router.patch("/change/:id", authenticate, async (req, res) => {
  try {
    const { medicineName, medicineTime, medicineQty } = req.body;
    await Medicine.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        medicineName,
        medicineTime,
        medicineQty,
      }
    );

    const updatedMedicine = await Medicine.findById({
      _id: req.body._id,
    });
    res.status(200).json(updatedMedicine);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Error occurred while updating",
    });
  }
});

// Delete a medicine
router.delete("/delete:id", authenticate, async (req, res) => {
  try {
    await Medicine.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).json({
      message: "Deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Error occurred while deleting",
    });
  }
});

module.exports = router;
