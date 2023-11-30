import {
	addEmployeeApi,
	deleteEmployeeApi,
	fetchEmployeesFromApi,
	setEmployeesApi,
	updateEmployeeApi,
} from "../api/apiService";
import { Employee } from "../types/types";
import {
	addEmployee,
	deleteEmployee,
	setFullEmployees,
	updateEmployee,
} from "./employeesSlice";
import { AppThunk } from "./store";

export const fetchEmployeesAsync = (): AppThunk => {
	return async (dispatch) => {
		try {
			const employees: Employee[] = await fetchEmployeesFromApi();
			dispatch(setFullEmployees(employees));
		} catch (error) {
			console.error("Error fetching employees:", error);
		}
	};
};

export const addEmployeeAsync = (employee: Employee): AppThunk => {
	return async (dispatch) => {
		try {
			await addEmployeeApi(employee);
			dispatch(addEmployee(employee));
		} catch (error) {
			console.error("Error adding employee:", error);
		}
	};
};

export const updateEmployeeAsync = (employee: Employee): AppThunk => {
	return async (dispatch) => {
		try {
			await updateEmployeeApi(employee);
			dispatch(updateEmployee(employee));
		} catch (error) {
			console.error("Error updating employee:", error);
		}
	};
};

export const deleteEmployeeAsync = (id: string): AppThunk => {
	return async (dispatch) => {
		try {
			await deleteEmployeeApi(id);
			dispatch(deleteEmployee(id));
		} catch (error) {
			console.error("Error deleting employee:", error);
		}
	};
};

export const setEmployeeAsync = (employees: Employee[]): AppThunk => {
	return async (dispatch) => {
		try {
			await setEmployeesApi(employees);
			dispatch(setFullEmployees(employees));
		} catch (error) {
			console.error("Error setting employees:", error);
		}
	};
};
