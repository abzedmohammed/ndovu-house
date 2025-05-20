import { Table } from 'antd';
import { useEffect, useState } from 'react';

export default function MainTable({
	rowKey,
	className,
	scroll = 1000,
	columns = [],
	dataSource = [],
	loading = false,
}) {
	const [data, setdata] = useState(dataSource);

	useEffect(() => {
		setdata(dataSource);
	}, [dataSource]);

	return (
		<>
			<Table
				loading={loading}
				bordered
				scroll={{
					x: scroll,
				}}
				pagination={{
					defaultPageSize: 7,
					hideOnSinglePage: true,
					pageSizeOptions: [7, 20, 50, 100],
				}}
				rowKey={rowKey}
				className={className}
				columns={columns}
				dataSource={data}
			/>
		</>
	);
}
