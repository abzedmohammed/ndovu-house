import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const navLinks = [
	{
		text: 'home',
		link: '/',
	},
	{
		text: 'database view',
		link: '/database-view',
	},
	{
		text: 'MAP ANALYSIS',
		link: '/',
	},
	{
		text: 'GRAPH ANALYSIS',
		link: '/',
	},
	{
		text: 'knowledge BASE',
		link: '/',
	},
	{
		text: 'GEO DATA PORTAL',
		link: '/',
	},
];

export default function SubNavbar() {
	const { isActive } = useSelector((state) => state.auth);

	return (
		<div className='sub_navbar'>
			<div className='sub_navbar_links'>
				{navLinks.map((link, index) => (
					<Link
						to={link.link}
						key={index}
						className='sub_navbar_text'>
						{link.text}
					</Link>
				))}
				{isActive ? <Link to={'/dashboard/hydrogeologist'} className='sub_navbar_text sub_nav_dashboard'>dashboard</Link> : null}
			</div>
		</div>
	);
}
