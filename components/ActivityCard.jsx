import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const ActivityCard = (props) => {
    const navigation = useNavigation();

    return(
        <TouchableOpacity 
        style={styles.cardContainer} 
        onPress={() => 
            navigation.navigate("ActivityDetails", {
                title: props.title, description: props.description
            })
        }
        >
            <View style={styles.cardSubContainer}>
                <View>
                    <Text style={styles.cardTitle}>
                        {props.title}
                    </Text>
                    <Text style={styles.cardDescription}>
                        {props.description}
                    </Text>
                </View>
                <View>
                    <Text style={styles.cardTime}>{props.start}</Text>
                    <Text style={styles.cardTime}>{props.end}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ActivityCard;