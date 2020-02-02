import React from 'react';

import Box, { BoxHeader, BoxContent } from '../../Box';

import DynamicHeightList from '../../List/DynamicHeightList';
import ListItem from '../../List/ListItem';

export default ({ data }) => {
	const boxActions = [
		{
			icon: 'plus',
			title: 'Adicionar alerta ao sistema',
			callback: () => {
				alert('Você clicou em adicionar alerta');
			},
		},
	];

	const itemActions = [
		{
			icon: 'trash',
			title: 'Apagar alerta',
			color: 'red',
			callback: () => {
				alert('Você clicou em apagar alerta');
			},
		},
		{
			icon: 'dollar-sign',
			title: 'Cobrar alerta',
			color: '#7fb3d4',
			callback: () => {
				alert('Você clicou em cobrar alerta');
			},
		},
		{
			icon: 'phone',
			title: 'Chamar alerta',
			color: '#81babd',
			callback: () => {
				alert('Você clicou em chamar alerta');
			},
		},
	];

	return (
		<Box>
			<BoxHeader title={'Avisos do Sistema'} icon={'bug'} actions={boxActions} />
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
									actions={itemActions}
								/>
							)}
						/>
					</div>
				) : (
					<p>Sem avisos do sistema!</p>
				)}
			</BoxContent>
		</Box>
	);
};
