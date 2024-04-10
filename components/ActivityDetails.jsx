import { View, Text } from 'react-native'

const ActivityDetails = ({ route }) => {
    const { title, description } = route.params;
    return(
        <View>
            <Text>
                { title }
            </Text>
            <Text>
                { description }
            </Text>
        </View>
    );
};

export default ActivityDetails;