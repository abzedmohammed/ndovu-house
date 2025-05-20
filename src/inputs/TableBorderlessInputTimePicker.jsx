import { TimePicker } from 'antd';

export default function TableBorderlessInputTimePicker({
	value,
	inputName,
	recordKey,
	placeholder,
	onChange,
	onBlur = null,
	format = 'HH:mm',
	disabled
}) {
	return (
		<TimePicker
			disabled={disabled}
			value={value}
			onChange={(val) =>
				onChange(val ? val.format('HH:mm') : null, recordKey, inputName)
			}
			className={'table_borderless_input'}
			placeholder={placeholder}
			onBlur={onBlur}
			format={format}
		/>
	);
}
