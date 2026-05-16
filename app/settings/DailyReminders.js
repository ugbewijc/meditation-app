import React, { useState, useEffect } from "react";
import {
    View, Text, SafeAreaView, ScrollView, TouchableOpacity, Platform,
    Alert, TextInput, StyleSheet
} from "react-native";
import { Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Calendar } from "react-native-calendars";
import * as Notifications from "expo-notifications";
import DateTimePicker from "@react-native-community/datetimepicker";
import { COLORS, SIZES } from "../../constants";
import { useTheme } from "../../context/ThemeProvider";


const DailyReminders = () => {
    const { theme } = useTheme();
    const isDarkMode = theme === "dark"
    const [reminders, setReminders] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [manualTime, setManualTime] = useState("");
    const [userDetails, setUserDetails] = useState(null);
    const requestPermissions = async () => {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission not granted', 'Please allow notifications to receive reminders.');
        }
    };
    useEffect(() => {
        requestPermissions();
        loadUserDetails();
        loadReminders();
    }, []);
    const loadUserDetails = async () => {
        const user = await AsyncStorage.getItem("userDetails");
        setUserDetails(user ? JSON.parse(user) : {});
    };
    const loadReminders = async () => {
        const storedReminders = await AsyncStorage.getItem("reminders");
        const allReminders = storedReminders ? JSON.parse(storedReminders) : [];
        const futureReminders = allReminders.filter((reminder) => new Date(reminder.triggerDate) > new Date());
        setReminders(futureReminders);
    };
    const handleAddReminder = async () => {
        if (!selectedDate) {
            alert("Please select a date.");
            return;
        }
        const [inputHours, inputMinutes] = manualTime.split(":").map((item) => parseInt(item, 10));
        const triggerDate = new Date(selectedDate);
        if (!isNaN(inputHours) && !isNaN(inputMinutes)) {
            triggerDate.setHours(inputHours, inputMinutes, 0, 0);
        } else {
            triggerDate.setHours(selectedTime.getHours(), selectedTime.getMinutes(), 0, 0);
        }
        if (triggerDate <= new Date()) {
            alert("Please select a future time.");
            return;
        }


    }
    const newReminder = {
        id: Date.now(),
        date: selectedDate,
        time: manualTime || triggerDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        description: `Reminder: Time for your daily task!`,
        triggerDate: triggerDate.toISOString(),
    };
    try {
        const updatedReminders = [...reminders, newReminder];
        await AsyncStorage.setItem("reminders", JSON.stringify(updatedReminders));
        setReminders(updatedReminders);
        await scheduleNotification(newReminder);
        alert("Reminder added successfully!");
    } catch (error) {
        alert("Error adding reminder.");
    }
    const scheduleNotification = async (reminder) => {

        const triggerDate = new Date(reminder.triggerDate);

        if (Platform.OS === "web") {
            setTimeout(() => {
                new Notification("Reminder", { body: reminder.description });
            }, triggerDate - new Date());
        } else {
            await Notifications.scheduleNotificationAsync({
                content: { title: "Reminder", body: reminder.description },
                trigger: { date: triggerDate },
            });
        }


    }
    const deleteReminder = async (id) => {
        const updatedReminders = reminders.filter((reminder) => reminder.id !== id);
        await AsyncStorage.setItem("reminders", JSON.stringify(updatedReminders));
        setReminders(updatedReminders);
    };
    const Reminder = ({ item }) => (
        <View style={styles.reminderContainer}>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.date}>{item.date} - {item.time}</Text>
            <TouchableOpacity onPress={() => deleteReminder(item.id)} style={styles.deleteButton}>
                <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );


    return (
        <></>

    )
}
export default DailyReminders;
