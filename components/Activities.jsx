import { View } from 'react-native'
import ActivityCard from './ActivityCard';
import Day from './Day';

const Activities = (props) => {
    const activitiesInOrder = [];

    const sortDays = () => {
        for (let date = 1; date < 32; date++) {
            for (let x in props.activities) {
                if (date == props.activities[x].date.slice(-2)) {
                    activitiesInOrder.push(props.activities[x]);
                }
            }
        } 
    }
    
    const sortActivityDates = () => {
        sortDays();
        //console.log(activitiesInOrder)
    }

    sortActivityDates();

    return(
        <View>

            <Day/>
            {activitiesInOrder.map((activity) => {
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
    