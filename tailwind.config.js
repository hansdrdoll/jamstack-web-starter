module.exports = {
	theme: {
		extend: {
			colors: {
				jh: {
					navy: "#062f40",
					caribbean: "#368196",
					ice: "#dfebef",
					garnet: "#73061a",
					redwood: "#92374f",
					"strawberry-milk": "#f2e9e9",
					"sea-foam": "#e4f2eb",
					"sea-green": "#328756",
					"hunter-green": "#0b3f1f",
					moss: "#6d8c3e",
					dew: "#f0f2e2",
					yam: "#a63f03",
					"white-peach": "#f2e8e6",
					"body-copy": "#333",
				},
			},
			fontFamily: {
				headline: "Vollkorn, sans-serif",
				bodycopy: "Merriweather, serif",
				subhead: "Josefin\\ Sans, sans-serif",
			},
			backgroundImage: (theme) => ({
				"hero-1":
					"url('https://res.cloudinary.com/dsq8eoc9l/ar_3,w_2000,f_auto,q_auto:eco,c_lfill,g_center,e_blur:2000/v1621867913/wedding_v2/0224_enc5bm')",
			}),
		},
	},
	variants: {},
	darkMode: "media",
	plugins: [],
	purge:
		process.env.NODE_ENV === "production"
			? {
					enabled: true,
					content: ["src/**/*.njk", "src/**/*.js"],
			  }
			: {},
};
