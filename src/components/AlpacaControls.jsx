import { PART_STYLES, PARTS } from "../constants/alpacaParts";
import Button from "./UI/Button";

export default function AlpacaControls({
	selectedPart,
	setSelectedPart,
	styles,
	setStyles,
}) {
	const handlePartSelect = (part) => {
		setSelectedPart(part);
	};
	const handleStyleChange = (style) => {
		setStyles((prev) => ({
			...prev,
			[selectedPart]: style,
		}));
	};
	return (
		<div className="p-4 z-10 relative">
			<h2 className="text-xl font-bold mb-4 uppercase">
				Accessorize the Alpaca's
			</h2>
			{/* Parts */}
			<div className="flex flex-wrap gap-y-3">
				{PARTS.map((part, index) => {
					return (
						<button
							key={index}
							className={`flex-1 min-w-[30%] mx-1 px-2 py-4 rounded-full cursor-pointer border-2 border-blue-400 text-blue-400 ${
								selectedPart == part.id
									? "bg-blue-900 text-white border-transparent"
									: "hover:border-blue-800 hover:text-blue-900"
							}`}
							onClick={() => handlePartSelect(part.id)}
						>
							{part.name}
						</button>
					);
				})}
			</div>
			{/* Part Styles */}
			<h2 className="uppercase mt-9 font-bold mb-4">Style</h2>
			{PART_STYLES[selectedPart] && (
				<div className="flex flex-wrap gap-y-3">
					{PART_STYLES[selectedPart].map((style, index) => {
						return (
							<Button
								key={style}
								onClick={() => handleStyleChange(style)}
								className={`flex-1 min-w-[30%] mx-1 px-2 py-4 rounded-full cursor-pointer border-2 border-blue-400 text-blue-400 ${
									styles[selectedPart] === style
										? "bg-blue-900 text-white border-transparent"
										: "hover:border-blue-800 hover:text-blue-900"
								}`}
							>
								{style}
							</Button>
						);
					})}
				</div>
			)}
		</div>
	);
}
