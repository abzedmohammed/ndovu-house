import { Form, Input } from 'antd';

export default function FormInputIcons({
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
			<Input className={inputClassName} placeholder={placeholder} />
		</Form.Item>
	);
}
