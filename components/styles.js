import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        width: 340,
        height: 100,
        padding: SIZES.medium,
        margin: 4,
        backgroundColor: COLORS.lightWhite,
        borderRadius: SIZES.small,
        justifyContent: "space-between",
        shadowColor: 'black'
    }
});

export default styles;
