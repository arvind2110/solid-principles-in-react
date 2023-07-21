import React from 'react';
import { Row, Col, Accordion } from 'react-bootstrap';
import Information from '../Common/Data/content.json';
import PrincipleInfo from '../Common/PrincipleInfo';
import ExampleOne from './ExampleOne/ExampleOne';

const DIP: React.FC = () => {
    return(
        <React.Fragment>
            <Row className='mt-2'>
                <Col>
                    <PrincipleInfo data={Information.DIP}/>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <Accordion activeKey="1">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Fetch and Display Data</Accordion.Header>
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

export default DIP;