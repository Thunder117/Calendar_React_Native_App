import { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Activities, ActivityMaker } from '../components';
import { COLORS } from '../constants';
import styles from './styles';

const Home = () => {
    const router = useRouter(); 
    // States
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
        }
    ]);

    // Returns the days sorted
    const sortDays = (datesToSort) => {
        let sortedDays = []
        for (let currentDate = 1; currentDate < 32; currentDate++) {
            for (let x in datesToSort) {
                if (currentDate == datesToSort[x].date.slice(-2)) {
                    sortedDays.push(datesToSort[x]);
                }
            }
        }
        return sortedDays;
    }
    
    // Sorts the activities by date
    const sortActivityDates = (datesToSort) => {
        let sortedActivities = [];
        //sortMonths
        sortedActivities = sortDays(datesToSort);
        //sortMinutes
       
        sortedActivities.forEach(element => {
            setActivities(a => [...a, element]);
        });
    }
    
    // Adds a new activity to activities
    const pushToActivities = (newActivity) => {
        setActivities([]);
        let activitiesToSort = [...activities, newActivity];
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
                
                <Activities activities={activities}/>
               
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Home;