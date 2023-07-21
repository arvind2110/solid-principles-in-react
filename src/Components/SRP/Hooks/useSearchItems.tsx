import React, { useEffect, useState } from 'react';

interface IUseSearchItemsParams {
    endpoint: string,
    setShowLoader: (showLoader: boolean) => void
}

const useSearchItems = (params: IUseSearchItemsParams) : {searchItems : any[]} => {
    const [searchItems, setSearchItems] = useState([]);
    const { endpoint, setShowLoader } = params;

    const fetchSearchItems = async () => {
        setShowLoader(true);
        const response = await fetch(endpoint);
        const data = await response.json();

        if (data && data.products) {
            setSearchItems(data.products);
            setShowLoader(false);
        }
    }

    useEffect(() => {
        fetchSearchItems();
    }, [endpoint]);

    return { searchItems };
}

export default useSearchItems;