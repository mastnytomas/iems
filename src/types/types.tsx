export interface Employee {
	id: string;
	fullName: string;
	companyEmail: string;
	jobPosition:
		| "frontend developer"
		| "backend developer"
		| "tester"
		| "system architect";
	workingTime: "full-time" | "part-time";
}
