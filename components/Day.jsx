import { View, Text } from 'react-native'
import styles from './styles';

const Day = (props) => {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const day = date.getDate();
    const monthString = date.toLocaleString('en', { month: 'long' });
    const monthNumber = date.getMonth();
    const dayOfWeek = (new Date(`2024-${monthNumber+1}-${props.day}T00:00:00`)).getDay();
   
    return(
        <View style={styles.dayContainer}> 
            <Text style={styles.dayText}>
                { day == props.day && <Text style={styles.dayHighlight}>Today, </Text> }
                {weekday[dayOfWeek]} {props.day} of {monthString}
            </Text>
        </View>
    );
}

export default Day