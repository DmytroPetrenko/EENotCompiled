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
		public: "electricengines.com.ua", // That solved it
	},
	configureWebpack: {
		devtool: "source-map",
	},
}
