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
	const [calendar, setCalendar] = useState(false); // True and False state of the calendar modal
	const [date, setDate] = useState(startDate); // Date variable
    const [activityMakerCard, setActivityMakerCard] = useState(false); // True and False state of the ActivityMakerCard modal

    // Opens and closes the calendar modal
    const handleOnPressPlus = () => {
		setCalendar(!calendar);
    }

    // Sets the date to the chosen date
	const handleChange = (date) => {
		setDate(date)
	}

    const handleConfirmDate = () => {
		handleOnPressPlus();
		createActivity();
	}

    const openActivityMakerCard = () => {
        setActivityMakerCard(!activityMakerCard);
    }

    const handleConfirmActivity = () => {
        console.log("activity created!");
        openActivityMakerCard();
    }

    const createActivity = () => {
        console.log("creating activity");
        openActivityMakerCard();
    }

    return (
        <View>
            <TouchableOpacity style={styles.calendarButton} onPress={handleOnPressPlus}>
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