import { View } from 'react-native'
import ActivityCard from './ActivityCard';
import Day from './Day';
import Month from './Month';
import Year from './Year';
import styles from './styles';

const Activities = (props) => {
    let previousDate = 0;
    let previousMonth = 0;
    let previousYear = 0;
    
    return(
        <View style={styles.centeredView}>
            
            { props.activities.map((activity) => {
                const currentDate = activity.date.slice(-2);
                const currentMonth = activity.date.slice(5,7);
                const currentYear = activity.date.slice(0,4);

                if(currentYear != previousYear) {
                    previousDate = currentDate;
                    previousMonth = currentMonth;
                    previousYear = currentYear;
                    return(
                        <View style={styles.activitiesContainer} key={activity.date}>
                            <Year date={activity.date} key={previousYear}/>
                            <Month date={activity.date} key={previousMonth}/>
                            <Day date={activity.date} key={activity.date}/>
                            <ActivityCard
                                title={activity.title}
                                description={activity.description}
                                done={activity.done}
                                date={activity.date}
                                toggleActivityDone={props.toggleActivityDone}
                                deleteActivity={props.deleteActivity}
                                id={activity.id}
                                key={activity.id}
                            />
                        </View>
                    );
                }

                if(currentMonth != previousMonth) {
                    previousDate = currentDate;
                    previousMonth = currentMonth;
                    return(
                        <View style={styles.activitiesContainer} key={activity.date}>
                            <Month date={activity.date} key={previousMonth}/>
                            <Day date={activity.date} key={activity.date}/>
                            <ActivityCard
                                title={activity.title}
                                description={activity.description}
                                done={activity.done}
                                date={activity.date}
                                toggleActivityDone={props.toggleActivityDone}
                                deleteActivity={props.deleteActivity}
                                id={activity.id}
                                key={activity.id}
                            />
                        </View>
                    );
                } 

                if(currentDate != previousDate) {
                    previousDate = currentDate;
                    return(
                        <View style={styles.activitiesContainer} key={activity.date}>
                            <Day date={activity.date} key={activity.date}/>
                            <ActivityCard
                                title={activity.title}
                                description={activity.description}
                                done={activity.done}
                                date={activity.date}
                                toggleActivityDone={props.toggleActivityDone}
                                deleteActivity={props.deleteActivity}
                                id={activity.id}
                                key={activity.id}
                            />
                        </View>
                    );
                } 

                return(
                    <ActivityCard style={styles.activitiesContainer}
                        title={activity.title}
                        description={activity.description}
                        done={activity.done}
                        date={activity.date}
                        toggleActivityDone={props.toggleActivityDone}
                        deleteActivity={props.deleteActivity}
                        id={activity.id}
                        key={activity.id}
                    />
                );
            })}

        </View>
    );
};

export default Activities;