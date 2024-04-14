import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native'

const ActivityDetails = ({ route }) => {
    const navigation = useNavigation();
    const { title, description } = route.params;
    
    useEffect(() => {
        navigation.setOptions({ headerTitle: title })
    }, []);

    return(
        <View>
            <Text>
                { description }
            </Text>
        </View>
    );
};

export default ActivityDetails;