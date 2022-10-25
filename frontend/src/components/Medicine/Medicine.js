import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MedicineList from "./MedicineList";
import { createMedicine, updateMedicine } from "../../state/actions/medicine";

function Medicine() {
  const [medicine, setMedicine] = useState({
    medicineName: "",
    medicineQty: 0,
    medicineTime: "",
  });

  const [medicineId, setMedicineId] = useState(null);

  const handleChangeString = (e) => {
    setMedicine({ ...medicine, [e.target.name]: e.target.value });
  };

  const handleChangeBoolean = (e) => {
    setMedicine({ ...medicine, medicineTime: e.target.value });
  };

  const medicineList = useSelector((state) =>
    medicineId ? state.medicine : null
  );

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (medicineId) {
      dispatch(updateMedicine(medicineId, medicine));
    } else {
      dispatch(createMedicine(medicine));
    }
    setMedicineId(null);
  };

  useEffect(() => {
    if (medicineId) {
      setMedicine(medicineList.find((med) => med._id === medicineId));
    } else {
      setMedicine({ medicineName: "", medicineQty: 0, medicineTime: "" });
    }
  }, [medicineId]);

  return (
    <div className={"container shadow my-5 p-5"}>
      <h1>Medicine Tracker</h1>
      <form className="row">
        <div className={"col-lg-6 col-12"}>
          <div className={"form-floating mb-3"}>
            <input
              type={"text"}
              className={"form-control"}
              id={"medicineName"}
              name={"medicineName"}
              aria-describedby={"medicineName"}
              placeholder={"Medicine Name"}
              value={medicine.medicineName}
              onChange={handleChangeString}
            />
            <label htmlFor={"medicineName"} className={"form-label"}>
              Medicine Name
            </label>
          </div>
          <div className={"form-floating mb-3"}>
            <input
              type={"number"}
              id={"medicineQty"}
              name={"medicineQty"}
              className={"form-control"}
              placeholder={"Medicine Quantity"}
              value={Number(medicine.medicineQty)}
              onChange={handleChangeString}
            />
            <label htmlFor={"medicineQty"} className={"form-label"}>
              Quantity
            </label>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="mb-3">
            <div className={"form-check"}>
              <input
                className={"form-check-input"}
                type={"radio"}
                id={"medicineTime"}
                name={"medicineTime"}
                value={"morning"}
                checked={medicine.medicineTime === "morning"}
                onChange={handleChangeBoolean}
              />
              <label className={"form-check-label"} htmlFor={"medicineType"}>
                Morning
              </label>
            </div>
            <div className={"form-check"}>
              <input
                className={"form-check-input"}
                type={"radio"}
                id={"medicineTime"}
                name={"medicineTime"}
                value={"evening"}
                checked={medicine.medicineTime === "evening"}
                onChange={handleChangeBoolean}
              />
              <label className={"form-check-label"} htmlFor={"medicineType"}>
                Evening
              </label>
            </div>
            <div className={"form-check"}>
              <input
                className={"form-check-input"}
                type={"radio"}
                id={"medicineTime"}
                name={"medicineTime"}
                value={"night"}
                checked={medicine.medicineTime === "night"}
                onChange={handleChangeBoolean}
              />
              <label className={"form-check-label"} htmlFor={"medicineType"}>
                Night
              </label>
            </div>
          </div>
          {!medicineId ? (
            <button
              className={"btn btn-outline-primary w-100"}
              onClick={handleSubmit}
            >
              Add Medicine
            </button>
          ) : (
            <>
              <button
                className={"btn btn-outline-primary me-2"}
                onClick={handleSubmit}
              >
                Update Medicine
              </button>
              <button
                className={"btn btn-outline-danger"}
                onClick={() => setMedicineId(null)}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </form>
      <div className={"col"} style={{ maxHeight: "300px", overflowY: "auto" }}>
        <MedicineList setMedicineId={setMedicineId} />
      </div>
    </div>
  );
}

export default Medicine;
