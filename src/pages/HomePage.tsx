import Title from "antd/es/typography/Title";
import AddEmployeeForm from "../components/AddEmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

const HomePage = () => {
	return (
		<div>
			<Title style={{ textAlign: "center" }}>IEMS</Title>
			<AddEmployeeForm />
			<EmployeeTable />
		</div>
	);
};

export default HomePage;
