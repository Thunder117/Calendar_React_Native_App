import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Activities, ActivityMaker } from '../components';
import { COLORS } from '../constants';
import styles from './styles';

const Home = () => {
    const router = useRouter(); 

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerTitle: "Good Morning, Chris",
                    headerRight: () => (
                        <ActivityMaker />
                    ),
                }}
                
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                
                <Activities />
               
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Home;