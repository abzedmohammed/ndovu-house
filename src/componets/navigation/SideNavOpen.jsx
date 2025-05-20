import { NavLink } from 'react-router-dom';

export default function SideNavOpen({ toggle }) {
	return (
		<>
			<div className='sidenav_open sticky top-[10%]'>
				<button
					onClick={() => toggle()}
					type='button'
					className='sidenav_open_toggler'>
					<img
						src={""}
						className='x-[1000] w-[5rem] h-[5rem] flex flex-shrink-0'
						alt='sidebar'
					/>
				</button>

				<div className='w-full fx_col mt-[1.5rem] gap-[1.25rem]'>
					{[].map((item, index) => {
						if (item.header) {
							return (
								<div key={index} className='fx_col gap-[1rem]'>
									<span className='navlink_header'>
										{item.header}
									</span>

									{item.links.map((link, indx) => {
										return (
											<NavLink
												to={link.link}
												key={indx}
												className='navlink gap-[.75rem]'>
												{link.icon}
												<span className=''>
													{link.title}
												</span>
											</NavLink>
										);
									})}
								</div>
							);
						}
						return (
							<NavLink
								to={item.link}
								key={index}
								className='navlink gap-[.75rem]'>
								{item.icon}
								<span className=''>{item.title}</span>
							</NavLink>
						);
					})}
				</div>
			</div>
		</>
	);
}
