import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT_WEIGHTS, SHADOWS } from "../constants";

const styles = StyleSheet.create({
    home: {
        height: '100%'
    },
    centeredView: {
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
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
    activityDetailsContainer: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    activityDetailsDescription: {
        margin: 24,
        fontSize: 25
    },
    confirmButton: {
        padding:SIZES.small,
        borderRadius:12,
        color:'white',
        backgroundColor: COLORS.tertiary,
    },
    confirmButtonText: {
        color:'white',
        fontWeight: FONT_WEIGHTS.semiBold
    },
    activitiesContainer: {
        width: '100%'
    },
    cardContainer: {
        width: '100%',
        height: 100,
        marginTop:1,
        marginBottom:1,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        ...SHADOWS.small
    },
    cardSubContainer0: {
        flex: 1,
    },
    cardSubContainerGreen: {
        height: '100%',
        backgroundColor: COLORS.green
    },
    cardSubContainerYellow: {
        height: '100%',
        backgroundColor: 'yellow'
    },
    cardSubContainer1: {
        padding: SIZES.medium,
        flex: 16
    },
    cardSubContainer2: {
        flex: 4,
        padding: SIZES.medium,
        alignItems: 'center',
        justifyContent: 'center'
    },
    activityMakerCardSubContainer: {
        flexDirection: "column",
        width: '100%',
        padding:8,
        marginBottom:20
    },
    activityMakerCardTitle: {
        fontSize: 20
    },
    activityMakerCardDescription: {
        fontSize: 15
    },
    doneButton: {
        padding: 7,
        borderRadius: 100,
    },
    trashButton: {
        padding: SIZES.xxSmall,
        alignSelf: 'flex-end',
        width: 35
    },
    cardTitle: {
        fontSize:SIZES.medium,
        fontWeight: FONT_WEIGHTS.bold,
        flex:1
    },
    cardDescription: {
        fontSize:SIZES.medium,
        flex:2
    },
    yearContainer: {
        padding: SIZES.xxSmall,
        alignItems: 'center'
    },
    yearText: {
        fontSize:SIZES.xLarge,
        fontWeight: FONT_WEIGHTS.semiBold
    },
    monthContainer: {
        padding: SIZES.xxSmall,
        alignItems: 'center'
    },
    monthText: {
        fontSize: SIZES.large,
        fontWeight: FONT_WEIGHTS.semiBold
    },
    dayContainer: {
        flexDirection: 'row',
        padding: SIZES.xSmall,
        margin: SIZES.xxSmall
    },
    dayText: {
        fontSize: SIZES.medium,
        fontWeight: FONT_WEIGHTS.medium
    },
    dayNumberText: {
        fontSize: SIZES.medium,
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
