import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles';

const ActivityCard = () => {

    return(
        <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.cardSubContainer}>
                <View>
                    <Text style={styles.cardDescription}>Work in the project
                    </Text>
                </View>
                <View>
                    <Text style={styles.cardTime}>2:00pm</Text>
                    <Text style={styles.cardTime}>to 4:00pm</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ActivityCard
    