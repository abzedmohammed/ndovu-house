import toast from 'react-hot-toast';
import { InfoCircleOutlined } from '@ant-design/icons';

export const successNotification = (toastObj) => {
	toast.custom(
		(t) => (
			<div key={t.id} className='toast_bar border-2 border-[#08C552]'>
				<div className='fx gap-[1.5rem] items-start'>
					{toastObj?.message || 'Operation completed successfully.'}
				</div>
			</div>
		),
		{
			id: toastObj?.id,
		}
	);
};

export const errorNotification = (toastObj) => {
	toast.custom(
		(t) => (
			<div key={t.id} className='toast_bar border-2 border-[#EE1D52]'>
				{toastObj?.message || 'Operation completed successfully.'}
			</div>
		),
		{
			id: toastObj?.id,
		}
	);
};

export const infoNotification = (toastObj) => {
	toast.custom(
		(t) => (
			<div key={t.id} className='toast_bar border-2 border-[#0296DA]'>
				<div className='fx gap-[1.5rem] items-start'>
					<div className='toast_box bg-[#E8F8FF]'>
						<div className='toast_box_content'>
							<InfoCircleOutlined className='!text-[#0296DA] !text-[2rem]' />
						</div>
					</div>
					<div className='fx_col'>
						<span className='toast_header_text text-[#04507C]'>
							{toastObj?.title || 'Info'}
						</span>
						<span className='toast_header_subtext'>
							{toastObj?.message ||
								'Check all details before proceeding.'}
						</span>
					</div>
					<button
						type='button'
						onClick={() => toast.dismiss(t.id)}
						className='toast_close_box flex ml-auto'>
						<img src={'toast_close'} alt='toast_close' />
					</button>
				</div>
			</div>
		),
		{
			id: toastObj?.id,
		}
	);
};

export const licenseCheckNotification = () => {
	toast.custom((t) => (
		<div key={t.id} className='toast_bar border-2 border-[#0071FF]'>
			<div className='fx gap-[1.5rem] items-start'>
				<div className='toast_box_scan fx flex-shrink-0'>
					<img src={'fingerprint'} alt='fingerprint' />
				</div>
				<div className='fx_col'>
					<span className='toast_header_subtext'>
						Checking your license details. This may take a moment.
						Please wait.
					</span>
				</div>
			</div>
		</div>
	));
};
