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
	primary: "#1b2c31",
	secondary: "#243a41",
	tertiary: "#2d4951",

	lightGray: "#e5e6e6",
	gray: "#83829A",
	darkGray: "#C1C0C8",
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