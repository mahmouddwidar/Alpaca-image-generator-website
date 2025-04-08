export const PARTS = [
	{ id: "background", name: "Background" },
	{ id: "hair", name: "Hair" },
	{ id: "ears", name: "Ears" },
	{ id: "eyes", name: "Eyes" },
	{ id: "mouth", name: "Mouth" },
	{ id: "neck", name: "Neck" },
	{ id: "leg", name: "Leg" },
	{ id: "accessories", name: "Accessories" },
];

export const PART_STYLES = {
	background: ["darkblue50", "blue70", "green60", "red50"],
	hair: ["default", "bang", "curls", "elegant", "quiff"],
	ears: ["default", "tilt-backward", "tilt-forward"],
	eyes: ["default", "angry", "naughty", "panda", "smart", "star"],
	mouth: ["default", "astonished", "eating", "laugh", "tongue"],
	neck: ["default", "bend-backward", "bend-forward", "thick"],
	leg: [
		"default",
		"bubble-tea",
		"cookie",
		"game-console",
		"tilt-backward",
		"tilt-forward",
	],
	accessories: ["flower", "glasses", "headphone"],
};

export const PART_ORDER = [
    "background",
    "neck",
    "ears",
    "hair",
    "eyes",
    "mouth",
    "leg",
    "accessories",
];