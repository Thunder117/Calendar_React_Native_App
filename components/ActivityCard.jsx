import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

import Swipeable from 'react-native-gesture-handler/Swipeable';

const ActivityCard = (props) => {
    const navigation = useNavigation();

    return(
        <Swipeable>
            <TouchableOpacity 
                style={styles.cardContainer} 
                onPress={() => 
                    navigation.navigate("ActivityDetails", {
                        title: props.title, description: props.description
                    })
                }
            >
                <View style={styles.cardSubContainer}>
                    <View style={styles.cardSubContainer1}>
                        <Text style={styles.cardTitle}>
                            {props.title}
                        </Text>
                        <Text style={styles.cardDescription}>
                            {props.description}
                        </Text>
                    </View>
                    <View style={styles.cardSubContainer2}>
                        <TouchableOpacity style={styles.doneButton}>
                            <AntDesign name="check" size={32} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.trashButton}>
                            <Feather name="trash" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </Swipeable>
    );
}

export default ActivityCard;