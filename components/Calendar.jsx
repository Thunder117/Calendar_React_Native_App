import { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from "../constants";
import styles from './styles';

const Calendar = () => {
	// Constants
	const today = new Date();
	const startDate = getFormatedDate(today.setDate(today.getDate()), 'YYYY/MM/DD');

	// States
	const [open, setOpen] = useState(false); // Open and closes the modal
	const [date, setDate] = useState(""); // Date variable

	const handleOnPress = () => {
		setOpen(!open);
		console.log("SELECTED(date): " + date);
	}

	const handleChange = (propDate) => {
		setDate(propDate)
	}

	return (
		<View>
			<TouchableOpacity style={styles.calendarButton} onPress={handleOnPress}>
				<AntDesign name="plus" size={24} color="black" />
			</TouchableOpacity>
			
			<Modal animationType='slide' transparent={true} visible={open}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>

						<DatePicker 
						mode='calendar'
						buttonColor={COLORS.primary}
						minimumDate={startDate}
						selected={date}
						onDateChange={handleChange}
						/>
						
						<TouchableOpacity onPress={handleOnPress}>
							<Text>Confirm</Text>
						</TouchableOpacity>

					</View>
				</View>
			</Modal>
		</View>
  	);
}

export default Calendar;