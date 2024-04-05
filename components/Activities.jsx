import { View } from 'react-native'
import ActivityCard from './ActivityCard';
import Day from './Day';

const Activities = (props) => {

    return(
        <View>

            <Day/>
            {props.activities.map((activity) => {
                return (
                    <ActivityCard
                        start={activity.start} 
                        end={activity.end}
                        title={activity.title}
                        description={activity.description}
                        key={activity.id}
                    />
                );
            })}

        </View>
    );
}

export default Activities
    