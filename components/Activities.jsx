import { View } from 'react-native'
import ActivityCard from './ActivityCard';
import Day from './Day';

const Activities = (props) => {

    const sortDays = () => {
        const activitiesInOrder = [];
        for (let date = 1; date < 32; date++) {
            for (let x in props.activities) {
                if (date == props.activities[x].date.slice(-2)) {
                    activitiesInOrder.push(props.activities[x]);
                }
            }
        } 
        props.setActivities(activitiesInOrder);
    }
    
    const sortActivityDates = () => {
        sortDays();
    }

    sortActivityDates();

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
    