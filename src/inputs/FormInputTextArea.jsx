import { Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';

export default function FormInputTextArea({
	label,
	inputName,
	placeholder,
	className,
	inputClassName = 'text_area',
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
			<TextArea className={inputClassName} placeholder={placeholder} />
		</Form.Item>
	);
}
