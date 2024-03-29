import { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import Calendar from './Calendar';

const ActivityMaker = () => {

    // Constants
	const today = new Date();
	const startDate = getFormatedDate(today.setDate(today.getDate()), 'YYYY/MM/DD');

    // States
	const [visibleCalendar, setVisibleCalendar] = useState(false); // Open and close state of the calendar modal
	const [date, setDate] = useState(startDate); // Date variable

    const createActivity = () => {
        console.log("creating activity");
    }

    // Opens and closes the calendar modal
    const handleOnPressPlus = () => {
		setVisibleCalendar(!visibleCalendar);
    }

    // Sets the date to the chosen date
	const handleChange = (date) => {
		setDate(date)
	}

    const handleConfirm = () => {
		handleOnPressPlus();
		createActivity();
	}

    return (
        <View>
            <TouchableOpacity style={styles.calendarButton} onPress={handleOnPressPlus}>
                <AntDesign name="plus" size={28} color="black" />
            </TouchableOpacity>

            <Calendar
            visibleCalendar={visibleCalendar}
            date={date}
            startDate={startDate}
            handleChange={handleChange}
            handleConfirm={handleConfirm}
            />
        </View>
    );
}

export default ActivityMaker;