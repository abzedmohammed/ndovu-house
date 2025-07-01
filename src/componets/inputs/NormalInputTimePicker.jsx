import { TimePicker } from 'antd';
import { chevronDownSmallSvg, timeSvg } from '../svgs';

export default function NormalInputTimePicker({
    label,
    value,
    inputName,
    onChange,
	placeholder,
	inputClassName,
	readOnly = false,
	format = 'HH:mm',
	suffixIcon = chevronDownSmallSvg,
	prefix = timeSvg,
}) {
	return (
		<div className='fx_col gap-[.5rem] w-full'>
			<label>{label}</label>
            <TimePicker
                prefix={prefix}
                suffixIcon={suffixIcon}
                readOnly={readOnly}
				value={value}
				onChange={(val) =>
					onChange(
						val ? val.format(format) : null,
						inputName
					)
				}
				className={inputClassName}
				placeholder={placeholder}
				format={format}
			/>
		</div>
	);
}
