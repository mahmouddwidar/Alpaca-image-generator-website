import React, { useState } from "react";
import AlpacaImage from "../components/AlpacaImage";
import AlpacaControls from "../components/AlpacaControls";

export default function Home() {
	const [selectedPart, setSelectedPart] = useState("background");
	const [styles, setStyles] = useState({
		background: "darkblue50",
		accessories: "flower",
		hair: "default",
		ears: "default",
		eyes: "default",
		leg: "default",
		mouth: "default",
		neck: "default",
	});
	return (
		<section className="bg-gray-100 min-h-screen">
			<div className="container mx-auto p-3">
				<h1 className="text-5xl md:text-8xl font-bold mb-10 uppercase md:w-8/12">
					Alpaca Generator
				</h1>
				<div className="flex flex-col lg:flex-row gap-8">
					<div className="order-2 md:order-2 w-full md:w-auto">
						<AlpacaControls
							selectedPart={selectedPart}
							setSelectedPart={setSelectedPart}
							styles={styles}
							setStyles={setStyles}
						/>
					</div>
					<div className="order-1 md:order-1 w-full md:w-[720px]">
						<AlpacaImage styles={styles} setStyles={setStyles} />
					</div>
				</div>
			</div>
		</section>
	);
}
