import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function useFetchDispatch(func, dependency, refetch) {
	const dispatch = useDispatch();

	const [isLoading, setisLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			await setisLoading(true);
			await dispatch(func(dependency));
			await setisLoading(false);
};																		``
		fetchData();
	}, [func, dependency, refetch]);
	return { isLoading };
}
