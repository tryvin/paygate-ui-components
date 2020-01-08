import React from 'react';

import { CellMeasurer, CellMeasurerCache, List, AutoSizer } from 'react-virtualized';

export default ({ rowRenderer, minHeight, defaultHeight, data }) => {
	const cellRendererCache = new CellMeasurerCache({
		minHeight: minHeight || 50,
		defaultHeight: defaultHeight || 50,
		fixedWidth: true,
	});

	const cellRenderer = ({ key, parent, index, style }) => {
		const CellRenderer = rowRenderer
			? rowRenderer
			: ({ style }) => <div style={style}>No Renderer</div>;

		return (
			<CellMeasurer
				cache={cellRendererCache}
				columnIndex={0}
				rowIndex={index}
				key={key}
				parent={parent}
			>
				<CellRenderer style={style} index={index} data={data} rowData={data[index]} />
			</CellMeasurer>
		);
	};

	return (
		<AutoSizer>
			{({ width, height }) => {
				return (
					<List
						width={width}
						height={height}
						rowHeight={cellRendererCache.rowHeight}
						rowCount={data.length}
						rowRenderer={cellRenderer}
						deferredMeasurementCache={cellRendererCache}
					/>
				);
			}}
		</AutoSizer>
	);
};
