import React, { useCallback } from 'react';

import LoadingBar from 'react-top-loading-bar';

const PaygateLoadingBar = ({ color, height, progress, infinity, onLoaderFinished }) => {
	const loadingRef = useCallback(
		node => {
			if (infinity && node) {
				node.continuousStart();
			}
		},
		[infinity]
	);

	return (
		<LoadingBar
			progress={progress}
			color={color || '#4291A6'}
			height={height || 3}
			ref={loadingRef}
			onLoaderFinished={onLoaderFinished}
		/>
	);
};

export default PaygateLoadingBar;
