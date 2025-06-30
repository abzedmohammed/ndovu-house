import { DatePicker } from "antd";
import { datePickerSvg } from "../svgs";

export default function NormalInputDatePicker({
    label,
    value,
    onChange,
    inputName,
	placeholder,
	inputClassName,
	readOnly = false,
	picker = 'date',
	format = 'DD/MM/YYYY',
	suffixIcon = datePickerSvg,
	maxDate,
	onBlur = null,
}) {
	return (
		<div className='fx_col gap-[.5rem] w-full'>
			<label>{label}</label>
            <DatePicker
                value={value}
				onChange={e => onChange(e, inputName)}
				maxDate={maxDate}
				suffixIcon={suffixIcon}
				readOnly={readOnly}
				placeholder={placeholder}
				className={inputClassName}
				format={format}
                picker={picker}
                onBlur={onBlur}
			/>
		</div>
	);
}
