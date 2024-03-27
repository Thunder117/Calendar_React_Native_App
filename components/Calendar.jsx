import { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';

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
			<Text>Calendar</Text>

			<TouchableOpacity onPress={handleOnPress}>
				<Text>Open</Text>
			</TouchableOpacity>
			
			<Modal animationType='slide' transparent={true} visible={open}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>

						<DatePicker 
						mode='calendar'
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

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        },
        modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        padding: 35,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
	}
});


export default Calendar;