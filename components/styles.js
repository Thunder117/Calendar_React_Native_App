import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT_WEIGHTS, SHADOWS } from "../constants";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        },
	modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        padding: 30,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
			width: 0,
			height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
	},
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
    },
    calendarButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: FONT_WEIGHTS.xLarge
    }
});

export default styles;
