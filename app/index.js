import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Calendar, ActivityCard, Day } from '../components';
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
                    headerTitle: "Good Morning, Chris"
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    
                    <Day/>
                    <ActivityCard/>
                    <ActivityCard/>
                    <ActivityCard/>
                    <Day/>
                    <ActivityCard/>
                    <ActivityCard/>
                    <Day/>
                    <Calendar/>
                    
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Home;