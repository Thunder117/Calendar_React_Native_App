import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT_WEIGHTS, SHADOWS } from "../constants";

const styles = StyleSheet.create({
    home: {
        backgroundColor: COLORS.secondary,
        height: '100%'
    },
    centeredView: {
        justifyContent: 'center'
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
    activitiesContainer: {
        width: '100%'
    },
    cardContainer: {
        width: '100%',
        height: 100,
        padding: SIZES.medium,
        margin:1,
        backgroundColor: COLORS.tertiary,
        ...SHADOWS.small
    },
    cardSubContainer: {
	    flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardSubContainer1: {
        flex: 5
    },
    cardSubContainer2: {
        flex: 1,
        justifyContent: 'space-between',
        height: '100%'
    },
    doneButton: {
        padding: SIZES.xSmall
    },
    trashButton: {
        padding: SIZES.xxSmall,
        alignSelf: 'flex-end',
        width: 35
    },
    cardTitle: {
        fontSize:SIZES.medium,
        color: 'white',
        flex:1
    },
    cardDescription: {
        fontSize:SIZES.medium,
        color: 'white',
        flex:2
    },
    yearContainer: {
        padding: SIZES.xxSmall,
        alignItems: 'center'
    },
    yearText: {
        fontSize:SIZES.xLarge,
        fontWeight: FONT_WEIGHTS.semiBold,
        color: 'white'
    },
    monthContainer: {
        padding: SIZES.xxSmall,
        alignItems: 'center'
    },
    monthText: {
        fontSize: SIZES.large,
        fontWeight: FONT_WEIGHTS.semiBold,
        color: 'white'
    },
    dayContainer: {
        flexDirection: 'row',
        padding: SIZES.xSmall,
        margin: SIZES.xxSmall
    },
    dayText: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.medium,
        color: 'white'
    },
    dayNumberText: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.regular,
        color: 'white'
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
