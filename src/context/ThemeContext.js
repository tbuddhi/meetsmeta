import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const ThemeContext = createContext()
const ThemeUpdateContext = createContext()


export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export const ThemeProvider = ({ children }) => {

    const defaultTheme = {
        title: "Company XXX",
        title_color: '#0000ff',
        menu_color: "#233333",
        menu_text_color: "#F5450A",
        primary_color: "#1233",
        secondary_color: "#121321"
    }

    const setNewTheme = evt => {
        const value = evt.target.value;
        const name = evt.target.name;
        setThemeValues({
            ...themeValues,
            [name]: value
        });
    }

    const [themeValues, setThemeValues] = useState(defaultTheme)

    const getTheme = async () => {
        const response = await axios(
            `https://p2etest.free.beeceptor.com/theme`
        );
        const data = response.data;
        setThemeValues(data);
    }

    useEffect(() => {
        // getTheme();
    }, []);

    return (
        <ThemeContext.Provider value={themeValues}>
            <ThemeUpdateContext.Provider value={setNewTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}
