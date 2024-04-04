import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Activities, ActivityMaker } from '../components';
import { COLORS } from '../constants';
import styles from './styles';

const Home = () => {
    const router = useRouter(); 
    let activities = [
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
            date: "2024/04/02",
            title: "Work in the project", 
            description: "Indeed, i do need to work on it"
        }
    ]
    const setActivities = (newActivities) => {
        console.log(activities);
        activities = [...newActivities];
        console.log(activities);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerTitle: "Good Morning, Chris",
                    headerRight: () => (
                        <ActivityMaker activities={activities} setActivities={setActivities}/>
                    ),
                }}
                
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                
                <Activities activities={activities} setActivities={setActivities}/>
               
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Home;