import { infoSmallSvg } from '../svgs';

export default function NotificationBanner({message}) {
	return (
		<>
			<div className='notiication_banner'>
				{infoSmallSvg}
				<span className='notiication_banner_text'>
					{message}
				</span>
			</div>
		</>
	);
}
