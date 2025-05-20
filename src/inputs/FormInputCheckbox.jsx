import { Checkbox, Form } from 'antd';

export default function FormInputCheckbox({
	label,
	inputName,
	className,
	checkboxClass,
	required = true,
}) {
	return (
		<Form.Item
			rules={[
				{
					required: required,
					message: 'Field is required',
				},
			]}
			className={className}
			name={inputName}
			valuePropName='checked'>
			<Checkbox className={checkboxClass}>{label}</Checkbox>
		</Form.Item>
	);
}
