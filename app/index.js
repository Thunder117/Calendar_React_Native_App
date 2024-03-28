import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { Calendar, ActivityCard } from '../components';
import { COLORS } from '../constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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

                    <ActivityCard/>
                    <ActivityCard/>
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
	backgroundColor: COLORS.white,
	alignItems: 'center',
	justifyContent: 'center'
	}
});

export default Home;