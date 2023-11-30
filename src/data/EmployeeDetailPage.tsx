import { useParams } from "react-router-dom";
import EmployeeDetailData from "../components/EmployeeDetailData";
import { EMPLOYEE_TEST_DATA } from "../data/Employee";

const EmployeeDetailPage = () => {
	const { id } = useParams();
	const employee = EMPLOYEE_TEST_DATA.find((emp) => emp.id === id);

	if (!employee) {
		return <div>Employee not found</div>;
	}

	return <EmployeeDetailData employee={employee} />;
};

export default EmployeeDetailPage;
