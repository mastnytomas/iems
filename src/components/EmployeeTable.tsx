import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Modal, Table } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/RootReducer";
import { deleteEmployee } from "../redux/employeesSlice";
import { Employee } from "../types/types";

const EmployeeTable: React.FC = () => {
	const data = useSelector((state: RootState) => state.employees.employees);
	const dispatch = useDispatch();

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

	const handleDelete = (employeeId: string) => {
		Modal.confirm({
			title: "Confirm Deletion",
			content: "Are you sure you want to delete this employee?",
			okText: "Yes",
			cancelText: "No",
			onOk: () => {
				dispatch(deleteEmployee(employeeId));
			},
		});
	};
	return (
		<>
			<Title level={2}>Employee list</Title>
			<Table dataSource={data} columns={columns} />
		</>
	);
};

export default EmployeeTable;
