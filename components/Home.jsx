import Activities from './Activities';
import { ScrollView, View } from 'react-native'
import { StatusBar, SafeAreaView } from 'react-native';
import { COLORS } from '../constants';
import styles from './styles';

const Home = (props) => {

    return(
        <SafeAreaView style={styles.home}> 
            <ScrollView showsVerticalScrollIndicator={false}>
                {props.sorted &&
                    <View>
                        <Activities activities={props.activities} sorted={props.sorted}/>
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;