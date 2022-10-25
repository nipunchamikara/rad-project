import React, {useEffect, useState} from "react";
import axios from "axios";
import MedicineListRow from "./MedicineListRow";


function MedicineList(props) {

	const [medicineList, setMedicineList] = useState([]);

	useEffect(() => {
		axios.post("http://localhost:3030/medicine/all").then((response) => {
			setMedicineList(response.data);
		});
	});


	return (
		<div>
			{
				medicineList.map((medicine) => {
					return <MedicineListRow medicineName={medicine.medicineName}/>;
				})
			}
		</div>
	);

}

export default MedicineList;