import { Button, Form, Input, Select } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Employee } from "../types/types";

const { Option } = Select;

const AddEmployeeForm: React.FC = () => {
	const [form] = Form.useForm();

	const onFinish = (values: Employee) => {
		const employeeWithId = { ...values, id: uuidv4() };
		console.log("Received values with ID:", employeeWithId);
	};

	return (
		<>
			<Title level={2}>New Employee</Title>
			<Form
				form={form}
				name="addEmployee"
				onFinish={onFinish}
				layout="vertical"
			>
				<Form.Item name="id" style={{ display: "none" }}>
					<Input />
				</Form.Item>

				<Form.Item
					name="fullName"
					label="Full Name"
					rules={[{ required: true, message: "Please enter full name" }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					name="companyEmail"
					label="Company Email"
					rules={[{ required: true, message: "Please enter company email" }]}
				>
					<Input type="email" />
				</Form.Item>

				<Form.Item
					name="jobPosition"
					label="Job Position"
					rules={[{ required: true, message: "Please select job position" }]}
				>
					<Select>
						<Option value="frontend developer">Frontend Developer</Option>
						<Option value="backend developer">Backend Developer</Option>
						<Option value="tester">Tester</Option>
						<Option value="system architect">System Architect</Option>
					</Select>
				</Form.Item>

				<Form.Item
					name="workingTime"
					label="Working Time"
					rules={[{ required: true, message: "Please select working time" }]}
				>
					<Select>
						<Option value="full-time">Full-time</Option>
						<Option value="part-time">Part-time</Option>
					</Select>
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit">
						Add Employee
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default AddEmployeeForm;
