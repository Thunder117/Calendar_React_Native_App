import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { Calendar, ActivityCard } from '../components';

const Home = () => {
    const router = useRouter(); 

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: '#FAFAFC' },
                    headerShadowVisible: false,
                    
                    headerTitle: "Good Morning, Chris"
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View>

                    <Text>Home</Text>
                    <ActivityCard/>
                    <Calendar/>
                    
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
	container: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'center'
	}
});

export default Home;