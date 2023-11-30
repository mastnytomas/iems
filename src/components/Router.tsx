import { Route, Routes } from "react-router-dom";
import EmployeeDetailPage from "../data/EmployeeDetailPage";
import HomePage from "../pages/HomePage";

const Router = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/employeeDetail/:id" element={<EmployeeDetailPage />} />
			</Routes>
		</>
	);
};

export default Router;
