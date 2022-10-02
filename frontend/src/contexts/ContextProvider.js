import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };

    return (
        <StateContext.Provider value={{currentColor,setCurrentColor,
        currentMode,setCurrentMode,setMode,setColor}}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);