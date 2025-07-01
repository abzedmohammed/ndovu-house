import { Select } from 'antd';
import { tableBorderlessSelectSuffixSvg } from '../componets/svgs';

export default function TableBorderlessInputSelect({
	value,
    inputName,
    recordKey,
	placeholder,
	onChange = null,
    onBlur = null,
    options = [],
	suffixIcon = tableBorderlessSelectSuffixSvg,
	disabled
}) {
	return (
		<Select
			disabled={disabled}
            variant='borderless'
            suffixIcon={suffixIcon}
            options={options}
			value={value}
			onChange={(val) => onChange(val, recordKey, inputName)}
			className={'table_borderless_input'}
			placeholder={placeholder}
			onBlur={onBlur}
		/>
	);
}
