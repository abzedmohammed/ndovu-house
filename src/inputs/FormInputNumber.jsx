import { Form, InputNumber } from 'antd';

export default function FormInputNumber({
	label,
	inputName,
	placeholder,
	className,
	inputClassName,
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
			name={inputName}
			className={className}
			label={label}>
			<InputNumber className={inputClassName} placeholder={placeholder} />
		</Form.Item>
	);
}
