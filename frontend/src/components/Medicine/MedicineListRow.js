import React from "react";

function MedicineListRow(props) {
	return (
		<div>
			<div
				className="card-hover d-flex align-items-center justify-content-between p-3 mb-2 shadow-sm rounded-3"
			>
				<div className={"container-fluid"}>
					{props.medicineName}
				</div>
			</div>
		</div>
	);

}

export default MedicineListRow;