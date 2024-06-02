"use client";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
	apiKey: process.env.NEXT_PUBLIC_MAP_API_KEY!,
	version: "weekly",
	language: "es",
	region: "CO",
});

const theme = [
	{
		stylers: [
			{
				hue: "#ff1a00",
			},
			{
				invert_lightness: true,
			},
			{
				saturation: -100,
			},
			{
				lightness: 33,
			},
			{
				gamma: 0.5,
			},
		],
	},
	{
		featureType: "water",
		elementType: "geometry",
		stylers: [
			{
				color: "#2D333C",
			},
		],
	},
];

const mapOptions = {
	center: {
		lat: 6.331644535064697,
		lng: -75.55615997314453,
	},
	marker: true,
	zoom: 17,
	disableDefaultUI: true,
	scrollwheel: true,
	clickableIcons: false,
	gestureHandling: "greedy",
	styles: theme,
};

export default function GoogleMap(): JSX.Element {
	const mapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let map: any;

		loader
			.importLibrary("maps")
			.then(({ Map }) => {
				map = new Map(mapRef.current!, mapOptions);
			})
			.catch((e) => console.error(e));

		loader
			.importLibrary("marker")
			.then(({ Marker }) => {
				new Marker({
					position: mapOptions.center,
					title: "Sede principal",
					map,
				});
			})
			.catch((e) => console.error(e));
	}, [mapRef]);

	return (
		<div
			style={{
				width: "100%",
				height: "400px",
				border: "1px solid var(--color-secondary)",
				display: "grid",
				placeContent: "center center",
			}}
			ref={mapRef}
		>
			<h6>Cargando mapa...</h6>
		</div>
	);
}
