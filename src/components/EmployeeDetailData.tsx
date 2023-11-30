import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Input, Select } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Employee } from "../types/types";

const { Option } = Select;

interface EmployeeDetailDataProps {
	employee: Employee;
}

const InputWithLabel: React.FC<{
	label: string;
	value: string;
	onChange: (value: string) => void;
	readOnly?: boolean;
	inputType?: "text" | "email" | "select";
	selectOptions?: string[];
	isId: boolean;
}> = ({
	label,
	value,
	onChange,
	readOnly = false,
	inputType = "text",
	selectOptions,
	isId,
}) => {
	return (
		!isId && (
			<div style={{ marginBottom: 16 }}>
				<label style={{ fontWeight: "bold", marginRight: 8 }}>{label}:</label>
				{readOnly ? (
					<p>{value}</p>
				) : inputType === "select" ? (
					<Select
						value={value}
						onChange={(newValue) => onChange(newValue)}
						style={{ width: "100%" }}
					>
						{selectOptions?.map((option) => (
							<Option key={option} value={option}>
								{option}
							</Option>
						))}
					</Select>
				) : (
					<Input
						type={inputType}
						value={value}
						onChange={(e) => onChange(e.target.value)}
					/>
				)}
			</div>
		)
	);
};

const EmployeeDetailData: React.FC<EmployeeDetailDataProps> = ({
	employee,
}) => {
	const [editMode, setEditMode] = useState(false);
	const [editedData, setEditedData] = useState<Employee>({ ...employee });

	const handleEditClick = () => {
		setEditMode(true);
	};

	const handleCancelEdit = () => {
		setEditMode(false);
	};

	const handleSaveClick = () => {
		console.log("Edited Data:", editedData);
		setEditMode(false);
	};

	const handleInputChange = (key: keyof Employee, value: string) => {
		setEditedData((prevData) => ({
			...prevData,
			[key]: value,
		}));
	};

	return (
		<>
			<Card title="Employee Details" style={{ width: "100%" }}>
				{Object.keys(employee).map((key) => (
					<InputWithLabel
						key={key}
						label={key}
						value={editedData[key as keyof Employee]}
						onChange={(value) =>
							handleInputChange(key as keyof Employee, value)
						}
						readOnly={!editMode}
						inputType={
							key === "jobPosition" || key === "workingTime" ? "select" : "text"
						}
						selectOptions={
							key === "workingTime"
								? ["full-time", "part-time"]
								: key === "jobPosition"
								? [
										"frontend developer",
										"backend developer",
										"tester",
										"system architect",
								  ]
								: []
						}
						isId={key === "id" ? true : false}
					/>
				))}
				<Flex wrap="wrap" gap="small">
					<Button
						type="primary"
						onClick={editMode ? handleSaveClick : handleEditClick}
					>
						{editMode ? "Save data" : "Edit mode"}
					</Button>
					{editMode && (
						<Button onClick={handleCancelEdit}>
							<CloseOutlined />
							Cancel Edit mode
						</Button>
					)}
				</Flex>
				<Flex wrap="wrap" gap="small" style={{ paddingTop: 30 }}>
					<Link to={"/"}>
						<Button>Back</Button>
					</Link>
					<Button type="primary" danger>
						Delete this employee
					</Button>
				</Flex>
			</Card>
		</>
	);
};

export default EmployeeDetailData;
