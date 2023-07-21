import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Products from './Products';
import Users from './Users';

const ExampleOne: React.FC = () => {
   
    return(
        <React.Fragment>
            <Row>
                <Col>
                    Products
                </Col>
                <Col>
                    Users
                </Col>
            </Row>
            <Row>
                <Col>
                    <Products />
                </Col>
                <Col>
                    <Users />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ExampleOne;