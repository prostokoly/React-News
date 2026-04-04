import { useEffect, useState } from "react";

export const useDebaunce = (value, delay) => {
    const [debounceValue, setDebaunceValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebaunceValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debounceValue;
};
