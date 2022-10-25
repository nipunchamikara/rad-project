import React from "react";
import MedicineList from "./MedicineList";

function Medicine(props) {
	return (
		<div>
			<div
				className="card-hover d-flex align-items-center justify-content-between p-3 mb-2 shadow-sm rounded-3"
			>
				<div className={"container-fluid"}>
					<div className={"row"}>
						<div className={"col"}>
							<h1>Add new medicine</h1>

							<form>
								<div className="mb-3">
									<label htmlFor="medicineName" className="form-label">Medicine Name</label>
									<                                   input type="text" className="form-control"
									                                          id="medicineName"
									                                          aria-describedby="medicineName"/>
								</div>
								<div className="mb-3">
									<input type={"radio"} id={"medicineTime"} name={"Morning"} value={"Morning"}/>
									<label htmlFor={"medicineType"}>Morning</label>
									<input type={"radio"} id={"medicineTime"} name={"Evening"} value={"Evening"}/>
									<label htmlFor={"medicineType"}>Evening</label>
									<input type={"radio"} id={"medicineTime"} name={"Night"} value={"Night"}/>
									<label htmlFor={"medicineType"}>Night</label>
								</div>
								<div className="mb-3">
									<label htmlFor={"medicineQty"} className={"form-label"}>Quantity</label>
									<input type={"text"} id={"medicineQty"} name={"medicineQty"}
									       className={"form-control"}/>
								</div>
							</form>
						</div>
						<div className={"col"}>
							<MedicineList/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


export default Medicine;