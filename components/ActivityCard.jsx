import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles';

const ActivityCard = () => {

    return(
        <TouchableOpacity style={styles.cardContainer}>
            <View>
                <Text style={styles.cardTime}>2:00pm to 4:00pm</Text>
                <Text style={styles.cardDescription}>Work in the project</Text>
            </View>
        </TouchableOpacity>
    );
}

export default ActivityCard
    