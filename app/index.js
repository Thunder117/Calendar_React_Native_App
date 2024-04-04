import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Activities, ActivityMaker } from '../components';
import { COLORS } from '../constants';
import styles from './styles';

const Home = () => {
    const router = useRouter(); 
    const activities = [
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

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerTitle: "Good Morning, Chris",
                    headerRight: () => (
                        <ActivityMaker activities={activities}/>
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