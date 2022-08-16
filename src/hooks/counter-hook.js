import { useState } from 'react';

export const useCounter = (initialValue = 0, step = 1) => {

    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount(currentCount => currentCount + step);
    };

    const reset = () => {
        setCount(0);
    };

    return [count, increment, reset];
};