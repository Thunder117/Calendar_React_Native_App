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
                    headerTitle: "Good Morning, Chris",
                    headerRight: () => (
                        <Calendar/>
                    ),
                }}
                
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    
                    <Day/>
                    <ActivityCard start="2" end="4" title="Work in the project" description="Indeed, i do need to work on it"/>
                    <ActivityCard start="2" end="4" title="Work in the project" description="Indeed, i do need to work on it"/>
                    <Day/>
                    <ActivityCard start="2" end="4" title="Work in the project" description="Indeed, i do need to work on it"/>
                    <ActivityCard start="2" end="4" title="Work in the project" description="Indeed, i do need to work on it"/>
                    <ActivityCard start="2" end="4" title="Work in the project" description="Indeed, i do need to work on it"/>
                    <Day/>
                    <ActivityCard start="2" end="4" title="Work in the project" description="Indeed, i do need to work on it"/>
                    <ActivityCard start="2" end="4" title="Work in the project" description="Indeed, i do need to work on it"/>
                    
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Home;