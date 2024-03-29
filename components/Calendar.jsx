import { View, Text, TouchableOpacity, Modal } from 'react-native'
import DatePicker from 'react-native-modern-datepicker';
import { COLORS } from "../constants";
import styles from './styles';

const Calendar = (props) => {
	
	return (
		<Modal animationType='slide' transparent={true} visible={props.visibleCalendar}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>

					<DatePicker 
					mode='calendar'
					buttonColor={COLORS.primary}
					minimumDate={props.startDate}
					selected={props.date}
					onDateChange={props.handleChange}
					/>

					<TouchableOpacity onPress={props.handleConfirm}>
						<Text>Confirm</Text>
					</TouchableOpacity>

				</View>
			</View>
		</Modal>
  	);
}

export default Calendar;