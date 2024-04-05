import { View } from 'react-native'
import ActivityCard from './ActivityCard';
import Day from './Day';
import Month from './Month';

const Activities = (props) => {
    let previousDate = 0;
    let previousMonth = 0;

    return(
        <View>
            
            {props.activities.map((activity) => {

                if(activity.date.slice(5,7) != previousMonth) {
                    previousDate = activity.date.slice(-2);
                    previousMonth = activity.date.slice(5,7);
                    return(
                        <View key={activity.date}>
                            <Month date={activity.date} key={previousMonth}/>
                            <Day date={activity.date} key={activity.date}/>
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

                if(activity.date.slice(-2) != previousDate) {
                    previousDate = activity.date.slice(-2);
                    return(
                        <View key={activity.date}>
                            <Day date={activity.date} key={activity.date}/>
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

                return(
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

export default Activities;