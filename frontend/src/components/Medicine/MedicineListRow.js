import React from "react";
import { useDispatch } from "react-redux";
import { deleteMedicine } from "../../state/actions/medicine";

function MedicineListRow(props) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteMedicine(props.medicineId));
  };
  return (
    <div>
      <div className="card-hover d-flex align-items-center justify-content-between p-3 mb-2 shadow-sm rounded-3">
        <div className={"container-fluid"}>
          <div className={"row align-items-center"}>
            <div className={"col-5"}>{props.medicineName}</div>
            <div className={"col-2 text-capitalize"}>{props.medicineTime}</div>
            <div className={"col-2"}>{props.medicineQty}</div>
            <div className={"col-3"}>
              <div className={"d-flex justify-content-end"}>
                <button
                  className={"btn btn-outline-primary me-2"}
                  onClick={() => props.setMedicineId(props.medicineId)}
                >
                  Edit
                </button>
                <button
                  className={"btn btn-outline-danger"}
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicineListRow;
