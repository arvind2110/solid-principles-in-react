import React from 'react';
import { Col, Row } from 'react-bootstrap';

interface IProduct {
    id: number,
    title: string,
    price: number
}

interface IProductProps {
    product: IProduct
}

const Product: React.FC<IProductProps> = (props: IProductProps) => {
    const { product } = props;
    const {id, title, price} = product;

    return (
        <Row className='mt-2' key={"product-" + id}>
            <Col sm="4" md="4">
                {id}
            </Col>
            <Col sm="4" md="4">
                {title}
            </Col>
            <Col sm="4" md="4">
                {price}
            </Col>
        </Row>
    )
};

export default Product;