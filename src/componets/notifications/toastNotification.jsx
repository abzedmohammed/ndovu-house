import toast from 'react-hot-toast';

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