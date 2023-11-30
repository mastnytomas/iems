import { Employee } from "../types/types";

const BASE_URL = "https://iems_api.com/employees";

export const addEmployeeApi = (employee: Employee): Promise<void> => {
	return fetch(BASE_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(employee),
	}).then((response) => {
		if (!response.ok) {
			throw new Error("Failed to add employee");
		}
	});
};

export const setEmployeesApi = (employees: Employee[]): Promise<void> => {
	return fetch(BASE_URL, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(employees),
	}).then((response) => {
		if (!response.ok) {
			throw new Error("Failed to set employees");
		}
	});
};

export const updateEmployeeApi = (employee: Employee): Promise<void> => {
	const { id } = employee;
	const url = `${BASE_URL}/${id}`;

	return fetch(url, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(employee),
	}).then((response) => {
		if (!response.ok) {
			throw new Error("Failed to update employee");
		}
	});
};

export const deleteEmployeeApi = (employeeId: string): Promise<void> => {
	const url = `${BASE_URL}/${employeeId}`;

	return fetch(url, {
		method: "DELETE",
	}).then((response) => {
		if (!response.ok) {
			throw new Error("Failed to delete employee");
		}
	});
};

export const fetchEmployeesFromApi = (): Promise<Employee[]> => {
	return fetch(BASE_URL)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Failed to fetch employees");
			}
			return response.json();
		})
		.then((data) => {
			return data as Employee[];
		});
};
