import { View, Text, TouchableOpacity, Modal } from 'react-native'
import styles from './styles';

const Calendar = (props) => {
	
	return (
		<Modal animationType='slide' transparent={true} visible={props.visibleCalendar}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>

					<Text> Aqui toi</Text>

				</View>
			</View>
		</Modal>
  	);
}

export default Calendar;