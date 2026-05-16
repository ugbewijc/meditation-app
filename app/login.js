
import React, { useState } from "react";
import { View, SafeAreaView, Image, Alert, Platform, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, SHADOWS } from "../constants";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const showAlert = (title, message) => {
        if (Platform.OS === "web" && typeof window !== "undefined") {
            window.alert(`${title}\n${message}`);
            return;
        }

        Alert.alert(title, message);
    };

    const handleLogin = async () => {
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        if (!trimmedEmail || !trimmedPassword) {
            showAlert("Validation Error", "Please fill in all fields.");
            return;
        }

        const userDetails = { email: trimmedEmail, password: trimmedPassword, token: "sample-token" };

        console.log('userDetails', userDetails);

        try {
            const detailsDatafromSignup = await AsyncStorage.getItem("userDetails");
            if (detailsDatafromSignup) {
                const parsedDetails = JSON.parse(detailsDatafromSignup);
                if (userDetails.email === parsedDetails.email && userDetails.password === parsedDetails.password) {
                    router.push("/home");
                } else {
                    showAlert("Error", "Incorrect email or password.");
                }
            } else {
                showAlert("Error", "No user details found in AsyncStorage.");
            }
        } catch (error) {
            console.error("Error accessing AsyncStorage", error);
        }
    };



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <></>
                    ),
                    headerTitle: "",
                }}
            />
            <View style={{ padding: 20 }}>
                <View
                    style={{
                        padding: 20,
                        marginLeft: "auto",
                        marginRight: "auto",
                        backgroundColor: "#f0f0f0",
                        borderRadius: 50,
                        height: 90,
                        ...SHADOWS.medium,
                        shadowColor: COLORS.white,
                    }}
                >
                    <Image
                        source={icons.menu}
                        style={{
                            width: 50,
                            height: 50,
                            marginBottom: 20,
                        }}
                    />
                </View>

                {/* Form Component */}
                <View style={{ marginTop: 20 }}>
                    <View style={{ marginBottom: 20 }}>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: "#ccc",
                                padding: 10,
                                borderRadius: 5,
                                marginBottom: 10,
                            }}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Email"
                        />
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: "#ccc",
                                padding: 10,
                                borderRadius: 5,
                                marginBottom: 10,
                            }}
                            value={password}
                            secureTextEntry={true}
                            onChangeText={setPassword}
                            placeholder="Password"
                        />
                    </View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.primary,
                            padding: 15,
                            borderRadius: 5,
                            alignItems: "center",
                        }}
                        onPress={handleLogin}
                    >
                        <Text style={{ color: "#fff", fontWeight: "bold" }}>Login</Text>
                    </TouchableOpacity>
                </View>

                {/* Additional Options */}
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                    }}
                >
                    <Text style={{ marginRight: 5 }}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={() => router.push("/signup")}>
                        <Text style={{ color: "blue" }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;
