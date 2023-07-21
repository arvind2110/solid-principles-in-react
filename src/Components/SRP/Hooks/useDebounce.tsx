import React, { useEffect, useState } from 'react';

interface IUseDebounceParams {
    value: string,
    delay: number
}

const useDebounce = (params: IUseDebounceParams) : {debounceValue : string} => {
    const { value, delay } = params;
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [value]);

    return { debounceValue };
}

export default useDebounce;