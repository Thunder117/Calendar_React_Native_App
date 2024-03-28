import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SIZES, COLORS } from "../constants";
import styles from './styles';

const ActivityCard = () => {

    return(
        <TouchableOpacity style={styles.container}>
            <Text>2pm - 4pm</Text>
            <Text>Chris</Text>
        </TouchableOpacity>
    );
}

export default ActivityCard
    