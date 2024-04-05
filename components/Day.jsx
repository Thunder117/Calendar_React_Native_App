import { View, Text } from 'react-native'
import styles from './styles';

const Day = (props) => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('en', { month: 'long' });
    
    return(
        <View style={styles.dayContainer}> 
            <Text style={styles.dayText}>
                { day == props.day && <Text style={styles.dayHighlight}>Today, </Text> }
                {props.day} of {month}
            </Text>
        </View>
    );
}

export default Day