import { Text, SafeAreaView } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { COLORS, SHADOWS, SIZES } from "../../constants";
import { useTheme } from "../../context/ThemeProvider";
import { Switch, View } from "react-native";
import { TouchableOpacity } from "react-native";
import ScreenHeaderBtn from "../../components/ScreenHeaderBtn";

const COLORS = {
    primary: "#312651",
    secondary: "#444262",
    tertiary: "#FF7754",

    gray: "#83829A",
    gray2: "#C1C0C8",

    white: "#F3F4F8",
    lightWhite: "#FAFAFC",

    darkBackground: "#000000",
    lightText: "#000000",
    darkText: "#FFFFFF",

};

const FONT = {
    regular: "DMRegular",
    medium: "DMMedium",
    bold: "DMBold",
};

const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
};

const SHADOWS = {
    small: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    medium: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    },
};

export { COLORS, FONT, SIZES, SHADOWS };


const ThemeChange = () => {
    console.log("hello from themechange");

    const { theme, toggleTheme } = useTheme();
    console.log('theme', theme);

    const isDarkMode = theme === "dark";

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: isDarkMode ? COLORS.darkBackground : COLORS.lightWhite,
            }}
        >
            <ScreenHeaderBtn />
            <View
                style={{
                    justifyContent: "space-between",
                    padding: SIZES.medium,
                    borderRadius: SIZES.small,
                    backgroundColor: isDarkMode ? COLORS.lightWhite : COLORS.darkBackground,
                    ...SHADOWS.medium,
                    shadowColor: COLORS.white,
                    marginVertical: SIZES.medium,
                    marginHorizontal: SIZES.medium,
                }}
            >
            </View>
            <View
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                }}
            >
                <Text
                    style={{
                        color: isDarkMode ? COLORS.lightText : COLORS.darkText,
                        fontSize: SIZES.medium,
                        fontFamily: "DMBold",
                        marginHorizontal: SIZES.medium,
                        marginVertical: SIZES.small,
                    }}
                >
                    {isDarkMode ? "Dark Mode" : "Light Mode"}
                </Text>

                <Switch
                    trackColor={{ false: COLORS.darkText, true: COLORS.lightText }}
                    value={isDarkMode}
                    onValueChange={toggleTheme}
                />
            </View>

        </SafeAreaView>
    )

}



export default ThemeChange;


