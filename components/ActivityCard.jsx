import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const ActivityCard = ({title, description, start, end}) => {
    const navigation = useNavigation();

    return(
        <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate("ActivityDetails")}>
            <View style={styles.cardSubContainer}>
                <View>
                    <Text style={styles.cardDescription}>
                        {title}
                    </Text>
                    <Text>
                        {description}
                    </Text>
                </View>
                <View>
                    <Text style={styles.cardTime}>{start}</Text>
                    <Text style={styles.cardTime}>{end}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ActivityCard;