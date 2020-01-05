import React from 'react';

import Box, { BoxHeader, BoxContent } from '../../Box';

export default props => (
	<Box>
		<BoxHeader title={'Avisos do Sistema'} icon={'bug'} />
		<BoxContent padded centered>
			Sem avisos no sistema!
		</BoxContent>
	</Box>
);
