import { useState } from 'react';
import { View, TouchableOpacity } from 'react-native'
import { getFormatedDate } from 'react-native-modern-datepicker';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import Calendar from './Calendar';
import ActivityMakerCard from './ActivityMakerCard';
import { COLORS } from '../constants';

const ActivityMaker = (props) => {

    // Constants
	const today = new Date(); // Current date
	const startDate = getFormatedDate(today.setDate(today.getDate()), 'YYYY/MM/DD');

    // States
	const [calendar, setCalendar] = useState(false); // True and False state of the Calendar modal
	const [date, setDate] = useState(startDate); // Date variable
    const [activityMakerCard, setActivityMakerCard] = useState(false); // True and False state of the ActivityMakerCard modal
    const [activityTitle, setActivityTitle] = useState(''); //
	const [activityDescription, setActivityDescription] = useState(''); //

    // Opens and closes the Calendar modal
    const toggleCalendar = () => {
		setCalendar(!calendar);
    }

    // Sets the date variable to the chosen date when the user changes the date in the calendar
	const handleChange = (date) => {
		setDate(date);
	}
    
    // Opens and closes the ActivityMakerCard modal
    const toggleActivityMakerCard = () => { // change name
        setActivityMakerCard(!activityMakerCard);
    }

    // Calls toggleCalendar and toggleActivityMakerCard
    const handleConfirmDate = () => {
        toggleCalendar();
        toggleActivityMakerCard();
    }

    // Returns the highest id number in the activities array of objects
    const findHighestId = () => {
        return Math.max(...props.activities.map(o => o.id));
    }
    
    const createActivity = () => {
        highestId = findHighestId();
        props.pushToActivities({
            id: highestId + 1,
            start: "2",
            end: "3",
            date: date,
            title: activityTitle, 
            description: activityDescription
        });
        setActivityTitle("");
        setActivityDescription("");
    }

    ///////////////////////////////////////
    const handleConfirmActivity = () => {
        toggleActivityMakerCard();
        createActivity();
    }


    return (
        <View style={styles.centeredView}>
            <TouchableOpacity style={styles.calendarButton} onPress={toggleCalendar}>
                <AntDesign name="plus" size={28} color={COLORS.secondary} />
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
                activityTitle={activityTitle}
                setActivityTitle={setActivityTitle}
                activityDescription={activityDescription}
                setActivityDescription={setActivityDescription}
            />
        </View>
    );
}

export default ActivityMaker;