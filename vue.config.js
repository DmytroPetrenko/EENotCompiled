module.exports = {
	pluginOptions: {
		i18n: {
			locale: "en",
			fallbackLocale: "en",
			localeDir: "locales",
			enableInSFC: false,
		},
	},
	publicPath: "/",
	devServer: {
		compress: true,
		public: "ee-not-compiled-dz97b.ondigitalocean.app", // That solved it
	},
}
