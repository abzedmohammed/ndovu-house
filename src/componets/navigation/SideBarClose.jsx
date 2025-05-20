export default function SideBarClose({ toggle }) {
	return (
		<>
			<button
				onClick={() => toggle()}
				className='sidebar_close'
				type='button'>
				<img src={"sidebar_white"} alt='sidebar_close' />
			</button>
		</>
	);
}
