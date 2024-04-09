import Activities from './Activities';
import { ScrollView } from 'react-native'

const Home = (props) => {

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            {props.sorted &&
                
                <Activities activities={props.activities} sorted={props.sorted}/>

            }
        </ScrollView>
            
    );
};

export default Home;