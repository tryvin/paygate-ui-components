import React from 'react';

import Box, { BoxHeader, BoxContent } from '../../Box';

import DynamicHeightList from '../../List/DynamicHeightList';

export default ({ data }) => (
	<Box>
		<BoxHeader title={'Feed Geral'} icon={'bug'} />
		<BoxContent centered padded={data ? false : true}>
			{data ? (
				<div style={{ height: '300px', width: '100%' }}>
					<DynamicHeightList
						data={data}
						rowRenderer={({ style, rowData }) => (
							<div style={style}>
								<div style={{ 'margin-bottom': '10px' }}>
									<p>{rowData}</p>
								</div>
							</div>
						)}
					/>
				</div>
			) : (
				<p>Sem feed no sistema!</p>
			)}
		</BoxContent>
	</Box>
);
