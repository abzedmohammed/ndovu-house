import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { logoutStateFn } from '../features/auth/authSlice';
import { errorNotification } from '../componets/notifications/toastNotification';


export default function useAuthCheck() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [isSessionExpired, setIsSessionExpired] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token');

		const checkToken = () => {
			if (!token) {
				dispatch(logoutStateFn());
				navigate('/auth/login');
				return;
			}

			try {
				const decoded = jwtDecode(token);
				const currentTime = Date.now() / 1000;
				

				if (decoded.exp < currentTime) {
					setIsSessionExpired(true);
				} else {
					setIsSessionExpired(false);
				}
			} catch (error) {
				errorNotification({
					id: 19,
					title: error?.message,
					message: 'Invalid token. Login to continue',
				});
				dispatch(logoutStateFn());
				navigate('/auth/login');
			}
		};

		checkToken();
		const interval = setInterval(checkToken, 60000); 

		return () => clearInterval(interval);
	}, [navigate, dispatch]);

	return isSessionExpired;
}
