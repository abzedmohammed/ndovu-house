import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


export default function useFetchPost(url, dependency, body) {
	const { isActive, token } = useSelector((state) => state.auth);

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState('');
    const [data, setData] = useState([]);
    const [count, setcount] = useState(0)

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const headers = {
					'Content-Type': 'application/json',
				};

				if (token) {
					headers.Authorization = `Bearer ${token}`;
				}

				const res = await fetch(url, {
					method: 'POST',
                    headers,
                    body: JSON.stringify(body),
				});

				if (!res.ok) {
					if ([401, 403, 400].includes(res.status)) {
						// logoutStateFn()
					}
					setIsError('Request failed');
					setIsLoading(false);
					return;
				}

				const response = await res.json();
                setData(response?.data?.result || []);
                setcount(response?.total || 0);
				setIsError('');
			} catch (error) {
				setIsError(error.message || 'An error occurred');
			}

			setIsLoading(false);
		};

		fetchData();
	}, [url, dependency, token, isActive]);

	return { isLoading, isError, data, count };
}
