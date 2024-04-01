import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native'
import styles from './styles';

const ActivityMakerCard = (props) => {

	return (
		<Modal animationType='slide' transparent={true} visible={props.activityMakerCard}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>

					<TextInput
						onChangeText={props.setActivityTitle}
						value={props.activityTitle}
						placeholder='Placeholder for activityTitle'
					/>

					<TextInput
						onChangeText={props.setActivityDescription}
						value={props.activityDescription}
						placeholder='Placeholder for activityDescription'
					/>

                    <TouchableOpacity onPress={props.handleConfirmActivity}>
						<Text>Confirm</Text>
					</TouchableOpacity>

				</View>
			</View>
		</Modal>
  	);
}

export default ActivityMakerCard;