import React, { useEffect, useRef } from "react";
import { PART_ORDER, PART_STYLES } from "../constants/alpacaParts";
import Button from "./UI/Button";

export default function AlpacaImage({ styles, setStyles }) {
	const canvasRef = useRef(null);
	const containerRef = useRef(null);

	function getUrl(part, name) {
		return new URL(`../assets/alpaca/${part}/${name}.png`, import.meta.url)
			.href;
	}

	const drawAlpaca = async () => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		canvas.width = 720;
		canvas.height = 720;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for (const part of PART_ORDER) {
			const img = new Image();
			img.src = getUrl(part, styles[part]);
			await new Promise((resolve) => {
				img.onload = () => {
					ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
					resolve();
				};
				img.onerror = () => {
					console.error(`Failed to load image: ${part}/${styles[part]}`);
					resolve();
				};
			});
		}
	};

	// Handle download
	const handleDownload = () => {
		drawAlpaca().then(() => {
			const canvas = canvasRef.current;
			if (!canvas) return;

			// Create temporary link
			const link = document.createElement("a");
			link.download = "alpaca.png";
			link.href = canvas.toDataURL("image/png");
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		});
	};
	const handleRandomize = () => {
		const newStyles = {};
		for (const part in PART_STYLES) {
			const stylesArr = PART_STYLES[part];
			const randomStyle =
				stylesArr[Math.floor(Math.random() * stylesArr.length)];
			newStyles[part] = randomStyle;
		}
		setStyles(newStyles);
	};

	// Draw initially (optional)
	useEffect(() => {
		drawAlpaca();
	}, [styles]);

	return (
		<div className="w-full max-w-[720px] mx-auto" ref={containerRef}>
			{/* Hidden canvas for download */}
			<canvas ref={canvasRef} className="hidden" />

			{/* Visible Alpaca image */}
			<div className="relative w-full aspect-square mb-4">
				<img
					src={getUrl("background", styles.background)}
					alt=""
					className="w-full h-full absolute top-0 left-0"
				/>
				<img
					src={getUrl("accessories", styles.accessories)}
					alt=""
					className="w-full h-full absolute top-0 left-0 z-10"
				/>
				<img
					src={getUrl("ears", styles.ears)}
					alt=""
					className="w-full h-full absolute top-0 left-0"
				/>
				<img
					src={getUrl("eyes", styles.eyes)}
					alt=""
					className="w-full h-full absolute top-0 left-0 z-10"
				/>
				<img
					src={getUrl("hair", styles.hair)}
					alt=""
					className="w-full h-full absolute top-0 left-0"
				/>
				<img
					src={getUrl("leg", styles.leg)}
					alt=""
					className="w-full h-full absolute top-0 left-0"
				/>
				<img
					src={getUrl("mouth", styles.mouth)}
					alt=""
					className="w-full h-full absolute top-0 left-0 z-10"
				/>
				<img
					src={getUrl("neck", styles.neck)}
					alt=""
					className="w-full h-full absolute top-0 left-0"
				/>
			</div>

			{/* Action buttons */}
			<div className="flex gap-4">
				<Button
					onClick={handleDownload}
					className="py-3 px-6 text-white font-bold rounded-lg transition-colors flex-1 bg-blue-600 hover:bg-blue-700 cursor-pointer"
				>
					Download Alpaca
				</Button>
				<Button
					onClick={handleRandomize}
					className="py-3 px-6 text-white font-bold rounded-lg transition-colors flex-1 bg-purple-600 hover:bg-purple-700 cursor-pointer"
				>
					Randomize
				</Button>
			</div>
		</div>
	);
}
