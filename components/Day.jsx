import { View, Text } from 'react-native'
import styles from './styles';

const Day = (props) => {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const dateInString = props.date // Date passed by parent in string
    const dateInNumberDay = dateInString.slice(-2); // Day of the month passed by parent in number
    const dateInNumberMonth = dateInString.slice(5,7); // Month passed by parent in number
    const dateInNumberYear = dateInString.slice(0,4); // Year passed by parent in number
    
    const dayOfWeek = (new Date(`${dateInNumberYear}-${dateInNumberMonth}-${dateInNumberDay}T00:00:00`)).getDay(); // Name of the day of the week

    return(
        <View style={styles.dayContainer}> 

            <Text style={styles.dayText}> {weekdays[dayOfWeek]} </Text> 
            <Text style={styles.dayNumberText}>{dateInNumberDay}</Text>

        </View>
    );
}

export default Day