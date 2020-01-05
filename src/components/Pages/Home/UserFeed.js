import React from 'react';

import Box, { BoxHeader, BoxContent } from '../../Box';

export default props => (
	<Box>
		<BoxHeader title={'Feed Geral'} icon={'bug'} />
		<BoxContent padded centered>
			Sem feed no sistema!
		</BoxContent>
	</Box>
);
