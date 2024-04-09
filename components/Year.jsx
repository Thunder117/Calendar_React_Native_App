import { View, Text } from 'react-native'
import styles from './styles';

const Year = (props) => {
    const dateInString = props.date // Date passed by parent in string
    const dateInNumberYear = dateInString.slice(0,4); // Year passed by parent in number

    return(
        <View style={styles.dayContainer}> 

            <Text>
                { dateInNumberYear }
            </Text>

        </View>
    );
}

export default Year