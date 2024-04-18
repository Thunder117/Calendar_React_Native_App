import { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { ActivityMaker, Home, ActivityDetails } from '../components';
import { COLORS } from '../constants';

const Stack = createNativeStackNavigator();

const App = () => {
    // States
    let [sorted, setSorted] = useState(false);
	let [activities, setActivities] = useState([
        {
            id: "0",
            date: "2024/04/10",
            title: "Work in the project", 
            description: "Indeed, i do need to work on it",
            done: true
        },
        {
            id: "1",
            date: "2024/04/11",
            title: "Do groceries", 
            description: "Groceriessss",
            done: false
        },
        {
            id: "2",
            date: "2024/04/12",
            title: "Finish reading that book", 
            description: "I'm almost done, only 48 pages left.",
            done: false
        }
    ]);
    
    // Returns the activities sorted by days 
    const sortDays = (activitiesToSort) => {
        let sortedDays = [];
        for (let currentDate = 1; currentDate < 32; currentDate++) {
            for (let x in activitiesToSort) {
                if (currentDate == activitiesToSort[x].date.slice(-2)) {
                    sortedDays.push(activitiesToSort[x]);
                }
            }
        }
        return sortedDays;
    }
    
    // Returns the activities sorted by months 
    const sortMonths = (activitiesToSort) => {
        let sortedMonths = [];
        for (let currentDate = 1; currentDate < 13; currentDate++) {
            for (let x in activitiesToSort) {
                if (currentDate == activitiesToSort[x].date.slice(5,7)) {
                    sortedMonths.push(activitiesToSort[x]);
                }
            }
        }
        return sortedMonths;
    }
    
    // Returns the activities sorted by years 
    const sortYears = (activitiesToSort) => {
        let sortedYears = [];
        let allYears = []

        // Assigns all different years into allYears
        activitiesToSort.forEach(activity => {
            const currentYear = activity.date.slice(0,4)

            if(!allYears.includes(currentYear)) {
                allYears.push(currentYear);
            }
        });

        allYears.sort();

        allYears.forEach(currentYear => {
            for (let x in activitiesToSort) {
                if (currentYear == activitiesToSort[x].date.slice(0,4)) {
                    sortedYears.push(activitiesToSort[x]);
                }
            }
        });

        return sortedYears
    }

    
    // Sorts the activities by date
    const sortActivityDates = (activitiesToSort) => {
        let sortedActivities = [];
        sortedActivities = sortDays(activitiesToSort);
        sortedActivities = sortMonths(sortedActivities);
        sortedActivities = sortYears(sortedActivities);
       
        return sortedActivities;
    }
    
    // Returns the highest id number in the activities array of objects
    const findHighestId = () => {
        let highest = Math.max(...activities.map(o => o.id));
        if(highest < 0) {
            highest = 0;
        }
        return highest;
    }

    // Adds a new activity to activities
    const pushToActivities = (newActivity) => {
        let activitiesToSort = [...activities, newActivity];
        setActivities([]);
        let sortedActivities = sortActivityDates(activitiesToSort);

        sortedActivities.forEach(element => {
            setActivities(a => [...a, element]);
        });
    }

    // Returns activities with an activity removed
    const cutFromActivities = (activity) => {
        let index = 0;
        let counter = 0;
        activities.forEach(currentActivity => {
            if(currentActivity.id == activity.id) {
                index = counter;
                return;
            }
            counter++;
        });

        let newActivities = [...activities.slice(0, index), ...activities.slice(index + 1)];
        return newActivities;
    }

    // Deletes an activity from activities
    const deleteActivity = (activity) => {
        let newActivities = cutFromActivities(activity);
        setActivities([]);
        newActivities.forEach(element => {
            setActivities(a => [...a, element]);
        });
    }

    // Toggles an activity's done value
    const toggleActivityDone = (activity) => {
        let highestId = findHighestId();
        let newActivities = cutFromActivities(activity);
        newActivities = [...newActivities, {
            id: highestId + 1,
            date: activity.date,
            title: activity.title,
            description: activity.description,
            done: !activity.done
        }];
        newActivities = sortActivityDates(newActivities);
    
        setActivities([]);
        newActivities.forEach(element => {
            setActivities(a => [...a, element]);
        });
    }

    // Only gets called once at the beginning to sort the received activities array
    const initiate = () => {
        let activitiesToSort = activities;
        setActivities([]);
        let sortedActivities = sortActivityDates(activitiesToSort);
        sortedActivities.forEach(element => {
            setActivities(a => [...a, element]);
        });

        setSorted(true);
    }

    useEffect(() => {
        initiate();
    }, []);

    const toggleDrawer = () => {
        console.log("just did");
    }

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator 
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'white',
                },
                headerTintColor: COLORS.secondary,
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: COLORS.secondary
                },
            }}>

                <Stack.Screen 
                    name="Home"
                    options={{
                        headerTitle: "Welcome back, Chris",
                        headerRight: () => (
                            <ActivityMaker activities={activities} pushToActivities={pushToActivities}/>
                        )
                    }}
                >
                    {() => <Home activities={activities} toggleActivityDone={toggleActivityDone} deleteActivity={deleteActivity} sorted={sorted}/>}
                </Stack.Screen>

                <Stack.Screen 
                    name="ActivityDetails" 
                    component={ActivityDetails}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;