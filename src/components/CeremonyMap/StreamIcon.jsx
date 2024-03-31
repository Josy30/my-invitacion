import React from "react";
import "./CeremonyMap.scss";

function StreamIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="ceremony-svg"
			fill="none"
			viewBox="0 0 24 24">
			<path
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M16 10l2.577-1.546c.793-.476 1.19-.714 1.516-.683a1 1 0 01.713.403c.194.264.194.727.194 1.652v4.348c0 .925 0 1.388-.194 1.652a1 1 0 01-.713.404c-.326.03-.723-.208-1.516-.684L16 14m-9.8 4h6.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C16 16.48 16 15.92 16 14.8V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C14.48 6 13.92 6 12.8 6H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C3 7.52 3 8.08 3 9.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C4.52 18 5.08 18 6.2 18z"></path>
		</svg>
	);
}

export default StreamIcon;
