import { View, Text } from 'react-native'
import styles from './styles';

const Day = () => {

    return(
        <View style={styles.dayContainer}> 
            <Text style={styles.dayText}>
                <Text style={styles.dayHighlight}>Today</Text>, ?? of March
            </Text>
        </View>
    );
}

export default Day