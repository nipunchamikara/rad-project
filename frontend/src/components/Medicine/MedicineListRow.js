import React from "react";

function MedicineListRow(props) {
	return (
		<div>
			<div
				className="card-hover d-flex align-items-center justify-content-between p-3 mb-2 shadow-sm rounded-3"
			>
				<div className={"container-fluid"}>
					<div className={"row"}>
						<div className={"col-6"}>
							{props.medicineName}
						</div>
						<div className={"col-3"}>
							{props.medicineTime}
						</div>
						<div className={"col-3"}>
							{props.medicineQty}
						</div>
					</div>
				</div>
			</div>
		</div>
	);

}

export default MedicineListRow;