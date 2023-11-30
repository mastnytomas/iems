import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Modal, Table } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { Link } from "react-router-dom";
import { EMPLOYEE_TEST_DATA } from "../data/Employee";
import { Employee } from "../types/types";

const handleDelete = (employeeId: string) => {
	Modal.confirm({
		title: "Confirm Deletion",
		content: "Are you sure you want to delete this employee?",
		okText: "Yes",
		cancelText: "No",
		onOk: () => {
			console.log(`Deleting employee with ID: ${employeeId}`);
		},
	});
};

const columns = [
	{
		title: "Full Name",
		dataIndex: "fullName",
		key: "fullName",
	},
	{
		title: "Company Email",
		dataIndex: "companyEmail",
		key: "companyEmail",
	},
	{
		title: "Job Position",
		dataIndex: "jobPosition",
		key: "jobPosition",
	},
	{
		title: "Working Time",
		dataIndex: "workingTime",
		key: "workingTime",
	},
	{
		title: "Actions",
		key: "actions",
		render: (record: Employee) => (
			<span>
				<Link to={`/employeeDetail/${record.id}`}>
					<Button type="link" icon={<EditOutlined />} />
				</Link>
				<Button
					type="link"
					icon={<DeleteOutlined />}
					onClick={() => handleDelete(record.id)}
				/>
			</span>
		),
	},
];

const EmployeeTable: React.FC = () => {
	return (
		<>
			<Title level={2}>Employee list</Title>
			<Table dataSource={EMPLOYEE_TEST_DATA} columns={columns} />
		</>
	);
};

export default EmployeeTable;
