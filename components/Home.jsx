import Activities from './Activities';
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native';
import styles from './styles';

const Home = (props) => {

    return(
        <SafeAreaView style={styles.home}> 
            <ScrollView showsVerticalScrollIndicator={false}>
                {props.sorted &&
                    <View>
                        <Activities activities={props.activities} toggleActivityDone={props.toggleActivityDone} deleteActivity={props.deleteActivity} sorted={props.sorted}/>
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;