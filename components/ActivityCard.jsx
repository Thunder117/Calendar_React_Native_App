import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import { COLORS } from "../constants";

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
            <View style={styles.cardSubContainer0}>
                
            </View>
            <View style={styles.cardSubContainer1}>
                <Text style={styles.cardTitle}>
                    {props.title}
                </Text>
                <Text style={styles.cardDescription}>
                    {props.description}
                </Text>
            </View>
            <View style={styles.cardSubContainer2}>
                <TouchableOpacity style={styles.doneButton} onPress={() => props.toggleActivityDone({ ...props})}>
                    {props.done 
                    ?
                        <AntDesign name="checkcircle" size={38} color={COLORS.green} />
                    :
                        <AntDesign name="checkcircleo" size={38} color={COLORS.green} />
                    }
                </TouchableOpacity>
            </View>

        </TouchableOpacity>
    );
}

export default ActivityCard;