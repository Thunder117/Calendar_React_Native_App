import { View } from 'react-native'
import ActivityCard from './ActivityCard';
import Day from './Day';

const Activities = () => {

    

    const activities = [
        {
            id: "1",
            start: "2",
            end: "3",
            date: "2024/04/01",
            title: "Work in the project", 
            description: "Indeed, i do need to work on it"
        },
        {
            id: "2",
            start: "2",
            end: "3",
            date: "2024/04/02",
            title: "Work in the project", 
            description: "Indeed, i do need to work on it"
        },
        {
            id: "3",
            start: "2",
            end: "3",
            date: "2024/04/03",
            title: "Work in the project", 
            description: "Indeed, i do need to work on it"
        }
    ]

    return(
        <View>

            <Day/>
            {activities.map((activity) => {
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
    