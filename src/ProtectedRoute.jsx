import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
	const { isActive } = useSelector((state) => state.auth);

	return isActive ? <Outlet /> : <Navigate to='/auth/login' replace />;
};

export default ProtectedRoute;
