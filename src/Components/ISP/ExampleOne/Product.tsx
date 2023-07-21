import React from 'react';
import { Col, Row } from 'react-bootstrap';

interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string
}

interface IProductProps {
    product: IProduct
}

const Product: React.FC<IProductProps> = (props: IProductProps) => {
    const { product } = props;
    const {id, title, price, description} = product;

    return (
        <Row className='mt-2' key={"product-" + id}>
            <Col sm="2" md="2">
                {id}
            </Col>
            <Col sm="2" md="2">
                {title}
            </Col>
            <Col sm="2" md="2">
                {price}
            </Col>
            <Col sm="6" md="6">
                {description}
            </Col>
        </Row>
    )
};

export default Product;