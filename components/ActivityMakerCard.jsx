import { View, Text, TouchableOpacity, Modal } from 'react-native'
import styles from './styles';

const Calendar = (props) => {
	
	return (
		<Modal animationType='slide' transparent={true} visible={props.activityMakerCard}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>

					<Text> ActivityMakerCard</Text>

                    <TouchableOpacity onPress={props.handleConfirmActivity}>
						<Text>Confirm</Text>
					</TouchableOpacity>

				</View>
			</View>
		</Modal>
  	);
}

export default Calendar;