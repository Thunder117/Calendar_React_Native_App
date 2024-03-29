import { View } from 'react-native'
import ActivityCard from './ActivityCard';
import Day from './Day';

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
    