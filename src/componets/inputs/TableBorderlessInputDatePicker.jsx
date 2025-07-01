import { DatePicker } from 'antd';
import { datePickerSvg } from '../componets/svgs';

export default function TableBorderlessInputDatePicker({
	value,
	inputName,
	recordKey,
	placeholder,
	onChange,
	onBlur = null,
	picker = 'date',
	format = 'DD/MM/YYYY',
	suffixIcon = datePickerSvg,
	disabled
}) {
	return (
		<DatePicker
			disabled={disabled}
            suffixIcon={suffixIcon}
			value={value}
			onChange={(val) => onChange(val, recordKey, inputName)}
			className={'table_borderless_input'}
			placeholder={placeholder}
			onBlur={onBlur}
			format={format}
			picker={picker}
		/>
	);
}
