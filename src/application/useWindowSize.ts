'use client';
import { useState, useEffect } from 'react';

interface WindowSize {
	width: number;
	height: number;
}

const initialWindowSize = {
	width: 0,
	height: 0,
} as const;

export function useWindowSize() {
	const [windowSize, setWindowSize] = useState<WindowSize>(initialWindowSize);

	const getSize = () => {
		return {
			width: window.innerWidth,
			height: window.innerHeight,
		} as const;
	};

	useEffect(() => {
		const handleResize = () => {
			setWindowSize(getSize());
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowSize;
}
