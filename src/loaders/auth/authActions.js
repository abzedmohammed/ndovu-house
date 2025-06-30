import { jwtDecode } from 'jwt-decode';
import { errorNotification } from '../../componets/notifications/toastNotification';
import axiosInstance from '../../instance';
import { handleAuth } from '../../features/auth/authSlice';

export const loginAction = {
	mutationFn: async (data) => await axiosInstance.post('/auth/login', data),
	onSuccess: (data, _, navigate) => {
		if (data.token) {
			localStorage.setItem('token', data.token);
			navigate('/account/verification');
		} else {
			errorNotification({
				id: 2,
				message: 'Token not valid',
			});
		}
	},
	onError: (error) => {
		errorNotification({
			id: 2,
			message: error?.message,
		});
	},
};

export const accountVerification = {
	mutationFn: async (data) =>
		await axiosInstance.post('/user/verify-otp', data),
	onSuccess: (_, dispatch, navigate) => {
		const token = localStorage.getItem('token');
		
		if (token) {
			const decode = jwtDecode(token);
			dispatch(handleAuth(decode));
			navigate('/admin/dashboard');
		} else {
			errorNotification({
				id: 2,
				message: 'Token not valid',
			});
			navigate('/auth/login');
		}
	},
	onError: (error) => {		
		errorNotification({
			id: 2,
			message: error?.message,
		});
	},
};

export const accountResendOtp = {
	mutationFn: async () => await axiosInstance.post('/user/resend-otp', {}),
	onError: (error) => {
		errorNotification({
			id: 2,
			message: error?.message,
		});
	},
};
