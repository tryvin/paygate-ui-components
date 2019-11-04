import React from 'react';

import Box, { BoxHeader, BoxContent } from '../../Box';

export default (props) => (
    <Box>
        <BoxHeader
            title={'Resumo'}
            icon={'tachometer-alt'}
        />
        <BoxContent padded>
            ola
        </BoxContent>
    </Box>
)
