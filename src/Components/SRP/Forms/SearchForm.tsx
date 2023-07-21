import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

interface ISearchFormProps {
    title: string,
    searchText : string,
    setSearchText: (searchText: string) => void
}

const SearchForm: React.FC<ISearchFormProps> = (props: ISearchFormProps) => {
    const { title, searchText, setSearchText } = props;

    // Hanlde input search text
    const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        value = searchText ? value : (value).trim();

        // Set the value in the search text state
        setSearchText(value);
    }

    return(
        <Form>
            <Row>
                <Col>
                    <Form.Control type="text" value={searchText} placeholder={title} onChange={searchHandler} />
                </Col>
            </Row>            
        </Form>
    );
};

export default SearchForm;