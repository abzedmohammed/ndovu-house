import { downloadWhiteArrowDown } from '../svgs';

export default function DownloadTemplatebtn({tempObj}) {
	return (
		<a
			href={tempObj?.href}
			download
			type='button'
			className='download_template_btn'>
			{downloadWhiteArrowDown}
			Download Template
		</a>
	);
}
