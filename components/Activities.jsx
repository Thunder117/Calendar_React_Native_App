import { View } from 'react-native'
import ActivityCard from './ActivityCard';
import Day from './Day';

const Activities = (props) => {
    let previousDate = 0;

    return(
        <View>

            {props.activities.map((activity) => {

                if(activity.date.slice(-2) == previousDate) {

                    return(
                        <ActivityCard
                            start={activity.start} 
                            end={activity.end}
                            title={activity.title}
                            description={activity.description}
                            key={activity.id}
                        />
                    );
                } else {
                    previousDate = activity.date.slice(-2);

                    return(
                        <View key={previousDate}>
                            <Day day={previousDate} key={previousDate}/>
                            <ActivityCard
                                start={activity.start} 
                                end={activity.end}
                                title={activity.title}
                                description={activity.description}
                                key={activity.id}
                            />
                        </View>
                    );
                }
                
            })}

        </View>
    );
}

export default Activities;