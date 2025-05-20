import TextDynamic from "../../componets/typrography/TextDynamic";

export default function AuthHeader({ authTitle, authSubtitle }) {
	return (
		<>
			<div className='w-full fx_col gap-5'>
				<TextDynamic text={authTitle} className={'auth_option_header'} />

				<div className='fx_center'>
					<div className='separator w-[17%]'></div>
				</div>

				<TextDynamic
					text={authSubtitle}
					className={'auth_option_sub_header'}
				/>
			</div>
		</>
	);
}
