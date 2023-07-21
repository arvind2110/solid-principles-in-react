import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';

const ExampleOne: React.FC = () => {
    return(
        <React.Fragment>
            <Row>
                <Col>
                    <AddButton />
                </Col>
                <Col>
                    <DeleteButton />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ExampleOne;