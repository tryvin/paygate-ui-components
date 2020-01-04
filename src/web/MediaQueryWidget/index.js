import { useState, useEffect } from 'react';

export const useMediaQuery = mediaQuery => {
	const [mediaQueryMatches, setMediaQueryMatches] = useState(false);

	useEffect(() => {
		const updateMatch = () => setMediaQueryMatches(window.matchMedia(mediaQuery).matches);

		updateMatch();

		const hasEventListenerMethod =
			typeof window.matchMedia(mediaQuery).addListener != 'undefined';

		if (hasEventListenerMethod) {
			window.matchMedia(mediaQuery).addListener(updateMatch);
			return () => {
				window.matchMedia(mediaQuery).removeListener(updateMatch);
			};
		}
	});

	return mediaQueryMatches;
};

export default ({ mediaQuery, children }) => {
	const mediaQueryMatches = useMediaQuery(mediaQuery);

	return mediaQueryMatches ? children : null;
};
