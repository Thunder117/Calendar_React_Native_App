import { View, Text } from 'react-native'
import styles from './styles';
import { getToday } from 'react-native-modern-datepicker';

const Day = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('en', { month: 'long' });

    return(
        <View style={styles.dayContainer}> 
            <Text style={styles.dayText}>
                <Text style={styles.dayHighlight}>Today</Text>, {day} of {month}
            </Text>
        </View>
    );
}

export default Day