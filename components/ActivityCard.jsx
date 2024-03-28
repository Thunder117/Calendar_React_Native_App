import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SIZES, COLORS } from "../constants";

const ActivityCard = () => {

    return(
        <TouchableOpacity style={styles.container}>
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        padding: SIZES.xLarge,
        backgroundColor: COLORS.lightWhite,
        borderRadius: SIZES.medium,
        justifyContent: "space-between",
        shadowColor: 'black'
    }
});

export default ActivityCard
    