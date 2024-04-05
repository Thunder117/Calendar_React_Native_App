import { View, Text } from 'react-native'
import styles from './styles';

const Day = (props) => {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const today = new Date(); // Today's Date
    const dayInNumber = today.getDate(); // Today in number of the month

    const dateInString = props.date // Date passed by parent in string
    const dateInNumberDay = dateInString.slice(-2); // Day of the month passed by parent in number
    const dateInNumberMonth = dateInString.slice(5,7); // Month passed by parent in number
    const dateInNumberYear = dateInString.slice(0,4); // Year passed by parent in number
    const date = new Date(`${dateInNumberYear}-${dateInNumberMonth}-${dateInNumberDay}T00:00:00`) // Date passed by parent in Date
    const dateInStringMonth = months[date.getMonth()] // Month passed by parent in string
    
    const dayOfWeek = (new Date(`${dateInNumberYear}-${dateInNumberMonth}-${dateInNumberDay}T00:00:00`)).getDay(); // Name of the day of the week

    return(
        <View style={styles.dayContainer}> 
            <Text style={styles.dayText}>
                { dayInNumber == dateInNumberDay && <Text style={styles.dayHighlight}>Today, </Text> }
                {weekdays[dayOfWeek]} {dateInNumberDay} of {dateInStringMonth}
            </Text>
        </View>
    );
}

export default Day