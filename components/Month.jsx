import { View, Text } from 'react-native'
import styles from './styles';

const Month = (props) => {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const dateInString = props.date // Date passed by parent in string
    const dateInNumberDay = dateInString.slice(-2); // Day of the month passed by parent in number
    const dateInNumberMonth = dateInString.slice(5,7); // Month passed by parent in number
    const dateInNumberYear = dateInString.slice(0,4); // Year passed by parent in number
    const date = new Date(`${dateInNumberYear}-${dateInNumberMonth}-${dateInNumberDay}T00:00:00`) // Date passed by parent in date

    const dateInStringMonth = months[date.getMonth()] // Month passed by parent in string

    return(
        <View style={styles.dayContainer}> 

            <Text>
                { dateInStringMonth }
            </Text>

        </View>
    );
}

export default Month