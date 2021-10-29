module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layout/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				"azeret-mono": ["Azeret Mono", "system-ui"],
				ubuntu: ["Ubuntu", "system-ui"],
				"josefin-sans": ["Josefin Sans", "system-ui"],
			},

			width: {
				100: "28rem",
				104: "32rem",
				108: "36rem",
				112: "40rem",
				116: "44rem",
				122: "48rem",
				126: "52rem",
				130: "56rem",
				134: "60rem",
				138: "64rem",
				142: "68rem",
			},

			height: {
				100: "28rem",
				104: "32rem",
				108: "36rem",
				112: "40rem",
				116: "44rem",
				122: "48rem",
				126: "52rem",
				130: "56rem",
				134: "60rem",
				138: "64rem",
				142: "68rem",
			},

			colors: {
				white_: "#E9EBF1",
				black_: "#111513",
				brown_: "#b76143",
				gray_: {
					500: "#3a494e",
					400: "#6a91a4",
					300: "#bbc6d6",
				},
				blue_: "#3182ce",
				background: "#F2F2FB",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwind-scrollbar")],
};
