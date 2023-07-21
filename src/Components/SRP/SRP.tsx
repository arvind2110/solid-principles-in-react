import React from 'react';
import { Row, Col, Accordion } from 'react-bootstrap';
import Information from '../Common/Data/content.json';
import PrincipleInfo from '../Common/PrincipleInfo';
import ExampleOne from './ExampleOne/ExampleOne';

const SRP: React.FC = () => {
    return(
        <React.Fragment>
            <Row className='mt-2'>
                <Col>
                    <PrincipleInfo data={Information.SRP}/>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <Accordion activeKey="1">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Auto-Complete Search</Accordion.Header>
                            <Accordion.Body>
                                <ExampleOne />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default SRP;