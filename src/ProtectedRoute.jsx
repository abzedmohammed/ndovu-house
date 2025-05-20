import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import axiosInstance from './instance';

const ProtectedRoute = () => {
	const { isActive, token } = useSelector((state) => state.auth);

	axiosInstance.defaults.headers.common = {
		Authorization: `Bearer ${token}`,
	};
	
	useEffect(() => {
		axiosInstance.defaults.headers.common = {
			Authorization: `Bearer ${token}`,
		};
	}, [isActive, token]);

	return isActive ? <Outlet /> : <Navigate to='/auth/login' replace />;
};

export default ProtectedRoute;
