import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CustomButton from './CustomButton';
import { VscAdd, VscChromeMinimize } from "react-icons/vsc";

const ExampleOne: React.FC = () => {
    const addHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        alert(event.currentTarget.getAttribute('title'));
    }

    const deleteHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        alert(event.currentTarget.getAttribute('title'));
    }

    return(
        <React.Fragment>
            <Row>
                <Col>
                    <CustomButton title="Add" variant="primary" onClick={addHandler} >
                        <VscAdd />
                    </CustomButton>
                </Col>
                <Col>
                    <CustomButton title="Delete" variant="danger" disabled={true} onClick={deleteHandler} >
                        <VscChromeMinimize />
                    </CustomButton>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ExampleOne;