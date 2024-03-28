import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT_WEIGHTS } from "../constants";

const styles = StyleSheet.create({
    cardContainer: {
        width: 340,
        height: 100,
        padding: SIZES.medium,
        margin: 4,
        backgroundColor: COLORS.lightWhite,
        borderRadius: SIZES.small,
        justifyContent: 'space-between',
        shadowColor: 'black'
    },
    cardTime: {
        fontSize:SIZES.xLarge,
        fontWeight: FONT_WEIGHTS.regular
    },
    cardDescription: {
        fontSize:SIZES.large
    }
});

export default styles;
