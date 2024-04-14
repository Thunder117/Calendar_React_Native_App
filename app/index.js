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
            id: "1",
            date: "2024/04/10",
            title: "Work in the project", 
            description: "Indeed, i do need to work on it",
            done: false
        },
        {
            id: "2",
            date: "2024/04/11",
            title: "Do groceries", 
            description: "Groceriessss",
            done: false
        },
        {
            id: "3",
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
       
        sortedActivities.forEach(element => {
            setActivities(a => [...a, element]);
        });

        setSorted(true);
    }
    
    // Adds a new activity to activities
    const pushToActivities = (newActivity) => {
        let activitiesToSort = [...activities, newActivity];
        setActivities([]);
        sortActivityDates(activitiesToSort);
    }

    // Only gets called once at the beginning to sort the received activities array
    const initiate = () => {
        let activitiesToSort = activities;
        setActivities([]);
        sortActivityDates(activitiesToSort);
    }

    useEffect(() => {
        initiate();
    }, []);

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
                    {() => <Home activities={activities} sorted={sorted}/>}
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