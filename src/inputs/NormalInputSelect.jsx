import { Select, Spin } from 'antd';
import { fatArrowDownSvg } from '../componets/svgs';

export default function NormalInputSelect({
	label,
	value,
	suffixIcon = fatArrowDownSvg,
	inputName,
	placeholder,
	inputClassName,
	onChange,
	disabled,
	loading,
	options = [],
	onBlur = null,
}) {
	return (
		<div className='fx_col gap-[.5rem] w-full'>
			<label>{label}</label>
			<Select
				value={value}
				onChange={(val) => onChange(val, inputName)}
				className={inputClassName}
				placeholder={placeholder}
				onBlur={onBlur}
				disabled={disabled || loading}
				options={options}
				suffixIcon={loading ? <Spin /> : suffixIcon}
			/>
		</div>
	);
}
