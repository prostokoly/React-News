import { useEffect, useState } from "react";

export const useDebaunce = (value: string, delay: number) => {
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
