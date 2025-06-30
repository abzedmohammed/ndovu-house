import { Radio } from "antd";

export default function NormalInputRadioGroup({
	label,
    value,
	onChange,
	options = [],
	disabled,
	className
}) {
	return (
		<div className='fx_col gap-[.5rem] w-full'>
            <label>{label}</label>
            <Radio.Group className={className} disabled={disabled} onChange={e => onChange(e.target.value)} value={value} options={options} />
		</div>
	);
}
