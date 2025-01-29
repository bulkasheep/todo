import { useState } from "react";

const keyName = "tasks";

const getStoredValues = () => {
    const items = localStorage.getItem(keyName);
    return items ? JSON.parse(items) : [];
};

const getStoredValue = (key) => {
    const storedValues = getStoredValues();
    return storedValues.find((task) => task.key === key);
}

const saveValues = (values) => {
    localStorage.setItem(keyName, JSON.stringify(values));
};

const useLocalStorage = () => {
    const [storedValues, setStoredValues] = useState(() => {
        return getStoredValues();
    });

    const setValues = (values) => {
        setStoredValues(values);
        saveValues(values);
    };

    return [storedValues, setValues];
};

const removeStoredValue = (key) => {
    const storedValues = getStoredValues().filter((item) => item.key !== key);
    saveValues(storedValues);
};

export { getStoredValue, useLocalStorage, removeStoredValue };