import { Form, Input } from 'antd';

export default function FormInput({
	label,
	inputName,
	placeholder,
	className,
	inputClassName,
	required = true,
	readOnly,
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
			<Input readOnly={readOnly} className={inputClassName} placeholder={placeholder} />
		</Form.Item>
	);
}
