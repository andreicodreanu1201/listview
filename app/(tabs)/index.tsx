import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { router } from 'expo-router';


export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? 'dark' : 'light';
  const themeColors = Colors[theme];

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>Welcome!</ThemedText>

      <Pressable style={styles.button}>
        <ThemedText style={styles.buttonText}>Calendar</ThemedText>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push('/cursuri')}>
        <ThemedText style={styles.buttonText}>Courses</ThemedText>
      </Pressable>
    </ThemedView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  button: {
    padding: 20,
    borderRadius: 10,
    width: 150,
    marginTop: 20,
    backgroundColor: Colors.light.button, 
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.light.buttonText, 
  }
});
