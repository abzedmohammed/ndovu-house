import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from '../features/auth/authSlice';
import { infoNotification } from '../componets/notifications/toastNotification';


export default function useAuthCheck() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { token } = useSelector((state) => state.auth);

	const [isSessionExpired, setIsSessionExpired] = useState(false);

	useEffect(() => {
		const checkToken = () => {
			if (!token) {
				dispatch(handleLogout());
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
				infoNotification({
					id: 19,
					title: error,
					message: 'Invalid token. Login to continue',
				});
				dispatch(handleLogout());
				navigate('/auth/login');
			}
		};

		checkToken();
		const interval = setInterval(checkToken, 60000); 

		return () => clearInterval(interval);
	}, [navigate, token, dispatch]);

	return isSessionExpired;
}
