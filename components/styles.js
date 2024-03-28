import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT_WEIGHTS, SHADOWS } from "../constants";

const styles = StyleSheet.create({
    cardContainer: {
        width: 340,
        height: 120,
        padding: SIZES.medium,
        margin: 4,
        backgroundColor: COLORS.lightWhite,
        borderRadius: SIZES.small,
        ...SHADOWS.small
    },
    cardSubContainer: {
	    flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardTime: {
        fontSize:SIZES.xLarge,
        fontWeight: FONT_WEIGHTS.regular
    },
    cardDescription: {
        fontSize:SIZES.large
    },
    dayContainer: {
        padding: SIZES.small,
    },
    dayText: {
        fontSize:SIZES.large,
        fontWeight: FONT_WEIGHTS.regular
    },
    dayHighlight: {
        fontWeight: FONT_WEIGHTS.medium
    }
});

export default styles;
