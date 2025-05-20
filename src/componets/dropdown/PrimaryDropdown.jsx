import { Dropdown } from "antd";

export default function PrimaryDropdown({
	items,
	component,
	overlayStyle,
	placement = 'bottom',
    trigger = 'click',
    className,
    overlayClassName
}) {
	return (
        <Dropdown
            className={className}
			trigger={trigger}
			placement={placement}
            menu={{ items }}
            overlayClassName={overlayClassName}
			overlayStyle={overlayStyle}>
			{component}
		</Dropdown>
	);
}
