import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employee } from "../types/types";

export interface EmployeesState {
	employees: Employee[];
}

const loadEmployees = (): Array<Employee> => {
	return loadEmployeesFromLocalStorage();
};

const setEmployees = (data: Array<Employee>): void => {
	setEmployeesToLocalStorage(data);
};

const loadEmployeesFromLocalStorage = (): Array<Employee> => {
	const storage = localStorage.getItem("employees");
	return storage ? JSON.parse(storage) : [];
};

const setEmployeesToLocalStorage = (data: Array<Employee>): void => {
	localStorage.setItem("employees", JSON.stringify(data));
};

const initialState: EmployeesState = {
	employees: loadEmployees(),
};

const EmployeesSlice = createSlice({
	name: "employees",
	initialState,
	reducers: {
		setFullEmployees: (state, action: PayloadAction<Employee[]>) => {
			state.employees = action.payload;
			setEmployees(state.employees);
		},
		addEmployee: (state, action: PayloadAction<Employee>) => {
			state.employees.push(action.payload);
			setEmployees(state.employees);
		},
		updateEmployee: (state, action: PayloadAction<Employee>) => {
			const { id } = action.payload;
			const index = state.employees.findIndex((employee) => employee.id === id);
			if (index !== -1) {
				state.employees[index] = action.payload;
			}
			setEmployees(state.employees);
		},
		deleteEmployee: (state, action: PayloadAction<string>) => {
			const idToDelete = action.payload;
			state.employees = state.employees.filter(
				(employee) => employee.id !== idToDelete
			);
			setEmployees(state.employees);
		},
	},
});

export const { setFullEmployees, addEmployee, updateEmployee, deleteEmployee } =
	EmployeesSlice.actions;
export default EmployeesSlice.reducer;
