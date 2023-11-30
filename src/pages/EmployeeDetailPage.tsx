import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EmployeeDetailData from "../components/EmployeeDetailData";
import { RootState } from "../redux/RootReducer";

const EmployeeDetailPage = () => {
	const { id } = useParams();
	const employees = useSelector(
		(state: RootState) => state.employees.employees
	);
	const employee = employees.find((emp) => emp.id === id);

	if (!employee) {
		return <div>Employee not found</div>;
	}

	return <EmployeeDetailData employee={employee} />;
};

export default EmployeeDetailPage;
