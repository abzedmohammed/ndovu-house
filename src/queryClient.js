import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export const withQueryLoader =
	(queryKey, queryFn, options = {}) =>
	async () => {
		const result = await queryClient.fetchQuery({
			queryKey,
			queryFn,
			...options,
		});

		return result?.data?.data ?? result;
	};
