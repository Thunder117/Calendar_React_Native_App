import { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Activities, ActivityMaker } from '../components';
import { COLORS } from '../constants';
import styles from './styles';

const Home = () => {
    const router = useRouter(); 
    // States
    let [sorted, setSorted] = useState(false);
	let [activities, setActivities] = useState([
        {
            id: "1",
            start: "2",
            end: "3",
            date: "2024/04/03",
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
            date: "2024/04/01",
            title: "Work in the project", 
            description: "Indeed, i do need to work on it"
        },
        {
            id: "4",
            start: "2",
            end: "3",
            date: "2024/04/04",
            title: "Work in the project", 
            description: "Indeed, i do need to work on it"
        },
        {
            id: "5",
            start: "2",
            end: "3",
            date: "2024/04/01",
            title: "Work in the project", 
            description: "Indeed, i do need to work on it"
        },
        {
            id: "6",
            start: "2",
            end: "3",
            date: "2024/03/31",
            title: "Work in the project", 
            description: "Indeed, i do need to work on it"
        },
        {
            id: "7",
            start: "2",
            end: "3",
            date: "2024/03/30",
            title: "Work in the project", 
            description: "Indeed, i do need to work on it"
        }
    ]);

    // Returns the months sorted
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

    // Returns the days sorted
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
    
    // Sorts the activities by date
    const sortActivityDates = (activitiesToSort) => {
        let sortedActivities = [];
        //sortMinutes
        sortedActivities = sortDays(activitiesToSort);
        sortedActivities = sortMonths(sortedActivities);
       
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
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerTitle: "Good Morning, Chris",
                    headerRight: () => (
                        
                        <ActivityMaker activities={activities} pushToActivities={pushToActivities}/>
                        
                    ),
                }}
                
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                
                {sorted &&
                    <Activities activities={activities}/>
                }
               
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Home;