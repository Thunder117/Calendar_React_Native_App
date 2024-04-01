import { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import Calendar from './Calendar';
import ActivityMakerCard from './ActivityMakerCard';

const ActivityMaker = () => {

    // Constants
	const today = new Date();
	const startDate = getFormatedDate(today.setDate(today.getDate()), 'YYYY/MM/DD');

    // States
	const [calendar, setCalendar] = useState(false); // True and False state of the Calendar modal
	const [date, setDate] = useState(startDate); // Date variable
    const [activityMakerCard, setActivityMakerCard] = useState(false); // True and False state of the ActivityMakerCard modal

    // Opens and closes the Calendar modal
    const toggleCalendar = () => {
		setCalendar(!calendar);
    }

    // Sets the date variable to the chosen date when the user changes the date in the calendar
	const handleChange = (date) => {
		setDate(date)
	}

    // Calls toggleCalendar and toggleActivityMakerCard
    const handleConfirmDate = () => {
		toggleCalendar();
		toggleActivityMakerCard();
	}

    // Opens and closes the ActivityMakerCard modal
    const toggleActivityMakerCard = () => { // change name
        setActivityMakerCard(!activityMakerCard);
    }

    ///////////////////////////////////////
    const handleConfirmActivity = () => {
        console.log("activity created!");
        toggleActivityMakerCard();
    }


    return (
        <View>
            <TouchableOpacity style={styles.calendarButton} onPress={toggleCalendar}>
                <AntDesign name="plus" size={28} color="black" />
            </TouchableOpacity>

            <Calendar
            calendar={calendar}
            date={date}
            startDate={startDate}
            handleChange={handleChange}
            handleConfirmDate={handleConfirmDate}
            />

            <ActivityMakerCard 
            activityMakerCard={activityMakerCard}
            handleConfirmActivity={handleConfirmActivity}
            />
        </View>
    );
}

export default ActivityMaker;