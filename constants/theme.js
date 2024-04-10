const SIZES = {
	xxSmall: 5,
	xSmall: 10,
	small: 12,
	medium: 16,
	large: 20,
	xLarge: 24,
	xxLarge: 32,
};

const COLORS = {
	primary: "#1E81B0",
	secondary: "#FB6D48",

	gray: "#83829A",
	gray2: "#C1C0C8",

	white: "#F3F4F8",
	lightWhite: "#FAFAFC",
};

const FONT_WEIGHTS = {
	light: '300',
	regular: '400',
	medium: '500',
	semiBold: '600',
	bold: '700'
};

const SHADOWS = {
	small: {
	  shadowColor: "#000",
	  shadowOffset: {
		width: 0,
		height: 2,
	  },
	  shadowOpacity: 0.25,
	  shadowRadius: 3.84,
	  elevation: 2,
	},
	medium: {
	  shadowColor: "#000",
	  shadowOffset: {
		width: 0,
		height: 2,
	  },
	  shadowOpacity: 0.25,
	  shadowRadius: 5.84,
	  elevation: 5,
	},
  };

export { SIZES, COLORS, FONT_WEIGHTS, SHADOWS };