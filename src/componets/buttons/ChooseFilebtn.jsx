import { infoNotification } from '../notifications/toastNotification';

export default function ChooseFilebtn({
	allowMultiple,
	handleFileChange,
	accept,
	maxSizeMB = 2,
	fileId,
}) {
	const handleFileSelection = (event) => {
		const files = Array.from(event.target.files);
		const maxSizeBytes = maxSizeMB * 1024 * 1024;

		const validFiles = files.filter((file) => file.size <= maxSizeBytes);

		if (validFiles.length !== files.length) {
			infoNotification({
				id: 41,
				title: 'File size limit exceeded',
				message: `The maximum upload size of each file should not exceeded ${maxSizeMB}MB`,
			});
			return;
		}

		handleFileChange(validFiles);
	};

	return (
		<>
			<label className='choose_file_btn' htmlFor={fileId}>
				<span>Choose File</span>
				<input
					accept={accept}
					multiple={allowMultiple}
					onChange={handleFileSelection}
					type='file'
					id={fileId}
					hidden
				/>
			</label>
		</>
	);
}
