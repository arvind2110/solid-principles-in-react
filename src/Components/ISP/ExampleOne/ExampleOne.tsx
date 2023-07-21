import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from './Product';
import ProductInfo from './Data/ProductInfo.json';

const ExampleOne: React.FC = () => {
    
    // Follow [ISP] principle and pass only rquired product properties instead of all
    const product = {
        id: ProductInfo.id, 
        title: ProductInfo.title,
        price: ProductInfo.price,
        description: ProductInfo.description
    };

    return(
        <React.Fragment>
            <Row>
                <Col>
                    <Product product={product} />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ExampleOne;