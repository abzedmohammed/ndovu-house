import {
	errorNotification,
	successNotification,
} from './componets/notifications/toastNotification';
import { save } from './features/crud/crudSlice';
import { url } from './utils';

export async function dynamicSubmitFn({
	form,
	submitObj,
	navigateTo,
	navigate,
	dispatch,
	onSuccess,
	showSuccess = true,
	onError,
	showErrror = true,
}) {
	try {
		if (form) {
			await form.validateFields();
		}

		const res = await dispatch(save(submitObj));

		if (res?.payload?.success) {
			if (showSuccess) {
				successNotification({
					id: 1,
					message: res?.payload?.message,
				});
			}

			await onSuccess?.(res?.payload);

			if (navigateTo) {
				navigate(navigateTo);
			}
		} else {
			if (showErrror) {
				errorNotification({
					id: 2,
					message: res?.payload?.message,
				});
			}
			onError?.();
		}
	} catch (error) {
		errorNotification({
			id: 2,
			message: error?.message,
		});
	}
}

export const handleFetchStateData = async ({
	endpoint,
	payload,
	setData,
	setisLoading,
	token,
}) => {
	setData([]);
	setisLoading(true);

	const headers = {
		'Content-Type': 'application/json',
	};

	if (token) {
		headers.Authorization = `Bearer ${token}`;
	}

	try {
		const res = await fetch(`${url}/${endpoint}`, {
			method: 'POST',
			headers,
			body: JSON.stringify(payload),
		});

		if (!res.ok) {
			setData([]);
			return;
		}

		const response = await res.json();
		setData(response?.data?.result || []);
	} catch (error) {
		console.error(error);
		setData([]);
	} finally {
		setisLoading(false);
	}
};

export const handleUploadChange = ({ info, setLoading, handleFileChange }) => {
	const { status } = info.file;

	if (status === 'uploading') {
		setLoading(true);
		return;
	}

	if (status === 'done') {
		const response = info?.file?.response;
		if (response?.success) {
			const fileObj = {
				fileUrl: response?.jsonData,
				fileName: info?.file?.name,
			};
			handleFileChange(fileObj);

			successNotification({
				id: 873809,
				message: `${info.file.name} file uploaded successfully.`,
			});
		} else {
			errorNotification({
				id: 87383,
				message: response?.messages?.message || 'Upload failed',
			});
		}
		setLoading(false);
	}

	if (status === 'error') {
		setLoading(false);
		errorNotification({
			id: 8810,
			message: `${info.file.name} file upload failed.`,
		});
	}
};

export const createBeforeUpload = (allowedTypes = [], sizeLimitMB = 2) => {
	return (file) => {
		const isAllowedType = allowedTypes.includes(file.type);
		if (!isAllowedType) {
			errorNotification({
				id: 72728,
				message: `Only ${allowedTypes.join(', ')} files are allowed.`,
			});
		}

		const isWithinSize = file.size / 1024 / 1024 < sizeLimitMB;
		if (!isWithinSize) {
			errorNotification({
				id: 176351,
				message: `File must be smaller than ${sizeLimitMB}MB.`,
			});
		}

		return isAllowedType && isWithinSize;
	};
};

export const removeEmptyChildren = (data = []) => {
	return data.map((item) => {
		const cleanedItem = { ...item };
		if (
			Array.isArray(cleanedItem.children) &&
			cleanedItem.children.length === 0
		) {
			delete cleanedItem.children;
		} else if (Array.isArray(cleanedItem.children)) {
			cleanedItem.children = removeEmptyChildren(cleanedItem.children);
		}
		return cleanedItem;
	});
};

export const monitorSTKPush = async (
	checkStatusFn,
	cancelFn,
	intervalMs = 5000,
	timeoutMs = 20000,
	startMonitoring
) => {
	if (startMonitoring) {
		const intervalId = setInterval(async () => {
			try {
				await checkStatusFn();
			} catch (error) {
				clearInterval(intervalId);
				clearTimeout(timeoutId);
				cancelFn();
				errorNotification({
					id: 6,
					message:
						error?.message ||
						'An error occurred while checking STK status.',
				});
			}
		}, intervalMs);

		const timeoutId = setTimeout(() => {
			clearInterval(intervalId);
			cancelFn();
		}, timeoutMs);
	}
};

export const quillModules = {
	toolbar: [
		[{ size: ['small', false, 'large', 'huge'] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[{ list: 'ordered' }, { list: 'bullet' }],
		['link', 'image'],
		[{ indent: '-1' }, { indent: '+1' }, { align: [] }],
		[
			{
				color: [
					'#000000',
					'#e60000',
					'#ff9900',
					'#ffff00',
					'#008a00',
					'#0066cc',
					'#9933ff',
					'#ffffff',
					'#facccc',
					'#ffebcc',
					'#ffffcc',
					'#cce8cc',
					'#cce0f5',
					'#ebd6ff',
					'#bbbbbb',
					'#f06666',
					'#ffc266',
					'#ffff66',
					'#66b966',
					'#66a3e0',
					'#c285ff',
					'#888888',
					'#a10000',
					'#b26b00',
					'#b2b200',
					'#006100',
					'#0047b2',
					'#6b24b2',
					'#444444',
					'#5c0000',
					'#663d00',
					'#666600',
					'#003700',
					'#002966',
					'#3d1466',
					'custom-color',
				],
			},
		],
	],
};

export const quillFormats = [
	'header',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'color',
	'indent',
	'link',
	'image',
	'align',
	'size',
];
