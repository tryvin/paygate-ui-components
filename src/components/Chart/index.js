import React from 'react';

import styled from 'styled-components';
import { Chart } from 'react-charts';

const ChartBase = styled.div`
	& div.chart,
	& div.title {
		align-items: center;
		justify-content: center;
		display: flex;

		&.chart {
			height: 186px;
		}

		&.title {
			margin-top: 10px;
			font-weight: bold;
		}
	}
`;

export default ({ data, axes, title, nodata, tooltip }) => (
	<ChartBase>
		<div className={'chart'}>
			{data ? (
				<Chart data={data} axes={axes} tooltip />
			) : (
				nodata || 'Sem dados para visualização'
			)}
		</div>
		<div className={'title'}>{title}</div>
	</ChartBase>
);
