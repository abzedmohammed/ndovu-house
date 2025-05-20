import axios from 'axios';
import { url } from './utils';

const axiosInstance = axios.create({
	baseURL: url,
	headers: {
		'Content-Type': 'application/json',
	},
});

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		const statusCode = error.response ? error.response.status : null;

		if ([401, 403, 400].includes(statusCode)) {
			// handleLogout();
		}

		return Promise.reject(error);
	}
);

export default axiosInstance;
