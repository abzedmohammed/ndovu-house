import { Spin } from 'antd';

export const url = import.meta.env.VITE_API_URL;

export const defaultDropdownOverlayStyle = {
	width: 'fit-content',
	borderRadius: '1rem',
	background: '#FFF',
	boxShadow: 'none',
};

export const purpleDropdownOverlayStyle = {
	width: '7.875rem',
	height: 'fit-content',
	borderRadius: '1rem',
	backgroundColor: '#DBE1EE',
};

export const transparentDropdownOverlayStyle = {
	width: 'fit-content',
	borderRadius: '1rem',
	background: 'transparent',
	boxShadow: 'none',
	border: 'none',
};

const today = new Date();
let dd = String(today.getDate()).padStart(2, 0);
let mm = String(today.getMonth() + 1).padStart(2, 0);
let yyyy = today.getFullYear() - 18;

export const minDateOfBirth = `${yyyy}-${mm}-${dd}`;

export const isLoading = (processing, text, className = '') => {
	if (processing) return <Spin className={className} />;
	return text;
};

export const validatePassword = (password) => {
	if (password.length < 8) {
		return 'Password must be at least 8 characters long.';
	}
	if (!/[A-Za-z]/.test(password)) {
		return 'Password must contain at least one letter.';
	}
	if (!/\d/.test(password)) {
		return 'Password must contain at least one number.';
	}
	if (!/[@$!%*?&]/.test(password)) {
		return 'Password must contain at least one special character (@$!%*?&).';
	}
	return true;
};

export const capitaliseFirstLetter = (string) => {
	if (string)
		return (
			string.charAt(0).toUpperCase() +
				String(string).toLowerCase().slice(1) || string
		);
	return '';
};

export const capitaliseAllFirstLetter = (string) => {
	if (!string) return '';
	return string
		.toLowerCase()
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};

export const uppercaseLetters = (string) => {
	if (string) return String(string).toUpperCase();
	return '';
};

export const formatFileName = (fileName) => {
	if (fileName) {
		return fileName.split('_').pop();
	}
	return '';
};

export const generateUniqueId = () =>
	Date.now() + Math.floor(Math.random() * 1000);

export const getOrdinal = (i) => {
	const j = i % 10,
		k = i % 100;
	if (j === 1 && k !== 11) return 'st';
	if (j === 2 && k !== 12) return 'nd';
	if (j === 3 && k !== 13) return 'rd';
	return 'th';
};

export const formatTime = (timeString) => {
	if (!timeString) return '';
	if (timeString.split(':').length === 3) {
		return timeString.slice(0, 5);
	}
	return timeString;
};

export const formatImgPath = (path) => {
	if (!path || typeof path === 'object') return path;

	const domain = '102.217.125.162:2000';

	return path.startsWith('./')
		? `http://${domain}${path.replace('./', '/')}`
		: path;
};

export const removePlusFromPhone = (phone = '') => {
	if (typeof phone !== 'string') return phone;
	return phone?.startsWith('+') ? phone.slice(1) : phone;
};

export const formatPhone = (phone = '') => {
	if (typeof phone !== 'string') return phone;
	return phone?.startsWith('254') ? '0' + phone.slice(3) : phone;
};

export const formatFileSize = (bytes) => {
	if (bytes === 0) return '0 Bytes';
	const kb = 1024;
	const mb = kb * 1024;

	if (bytes >= mb) {
		return `${(bytes / mb).toFixed(2)} MB`;
	} else if (bytes >= kb) {
		return `${(bytes / kb).toFixed(2)} KB`;
	} else {
		return `${bytes}`;
	}
};
