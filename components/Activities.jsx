import { View, Text, TouchableOpacity } from 'react-native'
import { ActivityCard, Day } from '../components';
import styles from './styles';

const Activities = () => {

    return(
        <View>

            <Day/>
            <ActivityCard start="2" end="4" title="Work in the project" description="Indeed, i do need to work on it"/>
            <ActivityCard start="2" end="4" title="Work in the project" description="Indeed, i do need to work on it"/>
            <Day/>
            <ActivityCard start="2" end="4" title="Work in the project" description="Indeed, i do need to work on it"/>
            <ActivityCard start="2" end="4" title="Work in the project" description="Indeed, i do need to work on it"/>
            <ActivityCard start="2" end="4" title="Work in the project" description="Indeed, i do need to work on it"/>
            <Day/>
            <ActivityCard start="2" end="4" title="Work in the project" description="Indeed, i do need to work on it"/>
            <ActivityCard start="2" end="4" title="Work in the project" description="Indeed, i do need to work on it"/>
            
        </View>
    );
}

export default Activities
    