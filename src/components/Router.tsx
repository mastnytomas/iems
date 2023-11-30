import { Route, Routes } from "react-router-dom";
import EmployeeDetailPage from "../pages/EmployeeDetailPage";
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
