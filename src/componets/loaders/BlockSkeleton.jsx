import { Skeleton } from 'antd';

export default function BlockSkeleton({ count = [1], gap = '1rem' }) {
	return (
		<>
			<div style={{ gap: gap }} className='w-full fx_col'>
				{count.map((_, index) => (
					<Skeleton.Input block size='large' active key={index} />
				))}
			</div>
		</>
	);
}
