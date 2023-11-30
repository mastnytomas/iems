import { combineReducers } from "redux";
import employeesReducer, { EmployeesState } from "./employeesSlice";

export interface RootState {
	employees: EmployeesState;
}

const rootReducer = combineReducers({
	employees: employeesReducer,
});

export default rootReducer;
