import Activities from './Activities';
import { ScrollView, View } from 'react-native'
import { StatusBar, SafeAreaView } from 'react-native';
import { COLORS } from '../constants';

const Home = (props) => {

    return(
        <SafeAreaView> 
            <ScrollView showsVerticalScrollIndicator={false}>
                {props.sorted &&
                    <View>
                        <StatusBar backgroundColor={COLORS.primary} />
                        <Activities activities={props.activities} sorted={props.sorted}/>
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;