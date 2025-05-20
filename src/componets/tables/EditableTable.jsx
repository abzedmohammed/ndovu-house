import { Table } from 'antd';

export default function EditableTableWithActionButtons({
	rowKey,
	scroll = 1000,
	columns = [],
	dataSource = [],
	loading = false,
	emptyStateComponent = null
}) {

	return (
		<div className='w-full'>
			<Table
				loading={loading}
				rowKey={rowKey}
				scroll={{
					x: scroll,
				}}
				className='editable_table_with_action_buttons'
				dataSource={dataSource}
				columns={columns}
				pagination={false}
				locale={{
					emptyText: emptyStateComponent
				}}
			/>
		</div>
	);
}
