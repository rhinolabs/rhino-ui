import { useState } from "react";

export const useRandomColor = (initialColor?: string) => {
	const [color, setColor] = useState(initialColor ?? "#000000");

	const generateColor = () => {
		const newColor = `#${Math.floor(Math.random() * 16777215)
			.toString(16)
			.padStart(6, "0")}`;

		setColor(newColor);
		return newColor;
	};

	return { color, generateColor };
};
