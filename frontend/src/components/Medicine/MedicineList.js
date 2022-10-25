import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MedicineListRow from "./MedicineListRow";
import { getMedicine } from "../../state/actions/medicine";

function MedicineList({ setMedicineId }) {
  const medicineList = useSelector((state) => state.medicine);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMedicine());
  }, []);

  return (
    <div>
      {medicineList.length > 0 ? (
        medicineList.map((medicine) => (
          <MedicineListRow
            key={medicine._id}
            medicineName={medicine.medicineName}
            medicineTime={medicine.medicineTime}
            medicineQty={medicine.medicineQty}
            medicineId={medicine._id}
            setMedicineId={setMedicineId}
          />
        ))
      ) : (
        <div className="h-100 w-100 d-flex justify-content-center align-items-center">
          <p>No medicines found</p>
        </div>
      )}
    </div>
  );
}

export default MedicineList;
