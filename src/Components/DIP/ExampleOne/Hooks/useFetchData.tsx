import React, { useEffect, useState } from 'react';

interface IUseFetchDataParams {
    endpoint: string,
    setShowLoader: (showLoader: boolean) => void
}

const useFetchData = (params: IUseFetchDataParams) : {records : any} => {
    const [records, setRecords] = useState([]);
    const { endpoint, setShowLoader } = params;

    const fetchData = async () => {
        setShowLoader(true);
        const response = await fetch(endpoint);
        const data = await response.json();

        if (data) {
            setRecords(data);
            setShowLoader(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { records };
}

export default useFetchData;