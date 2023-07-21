import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const Home: React.FC = () => {
    return(
        <Row className="justify-content-md-center mt-2">
            <Col md="auto">
                <Image src="./images/solid.jpg" thumbnail />
            </Col>
        </Row>
    );
};

export default Home;