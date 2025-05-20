import { infoGraySmallSvg } from '../svgs';

export default function NotificationBannerInfoGray({ message }) {
	return (
		<>
			<div className='notiication_banner_info_gray'>
				{infoGraySmallSvg}
				<span className='notiication_banner_info_gray_text'>
					{message}
				</span>
			</div>
		</>
	);
}
