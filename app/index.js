import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { Calendar } from '../components/index';

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
            <Text>Home</Text>
            <Calendar/>
            
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