import React from 'react';
import { Col, Row } from 'react-bootstrap';

interface ISearchItem {
    id: number,
    title: string,
    description: string,
    price: boolean
}

interface ISearchItemProps {
    searchItem: ISearchItem
}

const SearchItem: React.FC<ISearchItemProps> = (props: ISearchItemProps) => {
    const { searchItem } = props;
    const {id, title, description, price} = searchItem;

    return (
        <Row className='mt-2' key={"search-item-" + id}>
            <Col sm="3" md="2">
                {id}
            </Col>
            <Col sm="3" md="2">
                {title}
            </Col>
            <Col sm="3" md="2">
                {price}
            </Col>
            <Col sm="3" md="6">
                {description}
            </Col>
        </Row>
    )
};

export default SearchItem;