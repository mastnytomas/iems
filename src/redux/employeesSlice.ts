import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employee } from "../types/types";

export interface EmployeesState {
	employees: Employee[];
}

const initialState: EmployeesState = {
	employees: [],
};

const EmployeesSlice = createSlice({
	name: "employees",
	initialState,
	reducers: {
		setEmployees: (state, action: PayloadAction<Employee[]>) => {
			state.employees = action.payload;
		},
	},
});

export const { setEmployees } = EmployeesSlice.actions;
export default EmployeesSlice.reducer;
