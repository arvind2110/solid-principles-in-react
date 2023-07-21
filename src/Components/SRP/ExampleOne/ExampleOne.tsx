import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchForm from '../Forms/SearchForm';
import useDebounce from '../Hooks/useDebounce';
import SearchItems from '../Lists/SearchItems';

const ExampleOne: React.FC = () => {
    // You can add this endpoint in .env environment file 
    const endpoint = "https://dummyjson.com/products/search?q=";

    const [searchText, setSearchText] = useState<string>("");

    // Handle api call on each key press and delay it using debounce concept
    const { debounceValue } = useDebounce({value: searchText, delay: 500});

    return(
        <React.Fragment>
            <Row className='mt-2'>
                <Col>
                    <SearchForm title="Search Products" searchText={searchText} setSearchText={setSearchText}  />
                </Col>
            </Row>
            {
                debounceValue ? 
                <Row className='mt-2'>
                    <Col>
                        <SearchItems endpoint={endpoint + debounceValue} />
                    </Col>
                </Row>
                : null
            }
        </React.Fragment>
    );
};

export default ExampleOne;