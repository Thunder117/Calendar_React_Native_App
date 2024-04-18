import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native'
import styles from './styles';

const ActivityDetails = ({ route }) => {
    const navigation = useNavigation();
    const { title, description } = route.params;
    
    useEffect(() => {
        navigation.setOptions({ headerTitle: title });
    }, []);

    return(
        <View style={styles.activityDetailsContainer}>
            <Text style={styles.activityDetailsDescription}>
                { description }
            </Text>
        </View>
    );
};

export default ActivityDetails;