import React from 'react';

import Box, { BoxHeader, BoxContent } from '../../Box';

import DynamicHeightList from '../../List/DynamicHeightList';
import ListItem from '../../List/ListItem';

export default ({ data }) => (
	<Box>
		<BoxHeader title={'Feed Geral'} icon={'bug'} />
		<BoxContent centered padded={data ? false : true}>
			{data ? (
				<div style={{ height: '300px', width: '100%' }}>
					<DynamicHeightList
						data={data}
						rowRenderer={({ style, rowData }) => (
							<ListItem
								style={style}
								icon={rowData.icon}
								iconColor={rowData.color}
								title={rowData.title}
								text={rowData.text}
								time={rowData.time}
							/>
						)}
					/>
				</div>
			) : (
				<p>Sem feed no sistema!</p>
			)}
		</BoxContent>
	</Box>
);
