import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native'
import styles from './styles';

const ActivityMakerCard = (props) => {

	return (
		<Modal animationType='slide' transparent={true} visible={props.activityMakerCard}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<View style={styles.activityMakerCardSubContainer}>
						<TextInput
							style={styles.activityMakerCardTitle}
							onChangeText={props.setActivityTitle}
							value={props.activityTitle}
							placeholder='A title...'
						/>

						<TextInput
							style={styles.activityMakerCardDescription}
							onChangeText={props.setActivityDescription}
							value={props.activityDescription}
							placeholder='A description...'
							multiline
						/>
					</View>

                    <TouchableOpacity style={styles.confirmButton} onPress={props.handleConfirmActivity}>
						<Text style={styles.confirmButtonText}>Confirm</Text>
					</TouchableOpacity>

				</View>
			</View>
		</Modal>
  	);
}

export default ActivityMakerCard;