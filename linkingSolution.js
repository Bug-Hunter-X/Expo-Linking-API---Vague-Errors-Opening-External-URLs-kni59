// Improved error handling for Expo Linking
import * as Linking from 'expo-linking';

export const openUrl = async (url) => {
  try {
    const canOpen = await Linking.canOpenURL(url);
    if (canOpen) {
      await Linking.openURL(url);
    } else {
      // Handle the case where the URL cannot be opened
      console.error(`Could not open URL: ${url}`);
      // Optionally display a user-friendly message explaining why it failed
      Alert.alert('Error', `Could not open the link: ${url}. Please ensure the app is installed and configured correctly.`)
    }
  } catch (error) {
    console.error('Error opening URL:', error);
    // More sophisticated error handling here, perhaps alerting the user
    Alert.alert('Error', 'An unexpected error occured. Please try again later.');
  }
};
