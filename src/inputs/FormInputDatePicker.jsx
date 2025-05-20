import { DatePicker, Form } from 'antd';
import { datePickerSvg } from '../componets/svgs';

export default function FormInputDatePicker({
	label,
	inputName,
	placeholder,
	className,
	inputClassName,
	required = true,
	readOnly = false,
	picker = 'date',
	format = 'DD/MM/YYYY',
	suffixIcon = datePickerSvg,
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
			<DatePicker
				suffixIcon={suffixIcon}
				readOnly={readOnly}
				placeholder={placeholder}
				className={inputClassName}
				format={format}
				picker={picker}
			/>
		</Form.Item>
	);
}
