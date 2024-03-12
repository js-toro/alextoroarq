'use client';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';

import Styles from './Styles.module.scss';
import { useWindowSize } from '@/application';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
	// 1.
	const windowSize = useWindowSize();

	//2.
	const scrollingContainerRef = useRef<HTMLDivElement>(null);

	// 3.
	const data = useMemo(() => {
		return {
			ease: 0.075,
			current: 0,
			previous: 0,
			rounded: 0,
		};
	}, []);

	// 5.
	const smoothScrollingHandler = useCallback(() => {
		data.current = window.scrollY;
		data.previous += (data.current - data.previous) * data.ease;
		data.rounded = Math.round(data.previous * 100) / 100;

		if (!scrollingContainerRef.current) return;
		document.body.style.height = `${
			scrollingContainerRef.current?.getBoundingClientRect().height
		}px`;
		scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

		// Recursive call
		requestAnimationFrame(() => smoothScrollingHandler());
	}, [data]);

	useEffect(() => {
		requestAnimationFrame(() => smoothScrollingHandler());
	}, [smoothScrollingHandler]);

	return (
		<div className={Styles.parent}>
			<div ref={scrollingContainerRef}>{children}</div>
		</div>
	);
};

export default SmoothScroll;
