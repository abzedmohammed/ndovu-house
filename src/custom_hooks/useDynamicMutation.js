import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useDynamicMutation = ({
	mutationFn,
	onSuccess,
	onError,
	invalidateQueryKeys = [],
	meta = {},
	redirectTo,
}) => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return useMutation({
		mutationFn,
		onSuccess: async (data, variables, context) => {
			await Promise.all(
				invalidateQueryKeys.map((key) =>
					queryClient.invalidateQueries({ queryKey: key })
				)
			);

			if (data?.data?.success) {
				await onSuccess?.(data?.data, dispatch, navigate, variables);

				if (redirectTo) {
					await navigate(redirectTo);
				}
			} else {
				onError?.(data?.data, variables, context);
			}
		},
		onError: (error, variables, context) => {
			onError?.(error, variables, context);
		},
		meta,
	});
};
