import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SIZES, COLORS } from "../constants";

const ActivityCard = () => {

    return(
        <TouchableOpacity style={styles.container}>
            <Text>An event</Text>
        </TouchableOpacity>
    );
}

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

export default ActivityCard
    