import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CustomButton from './CustomButton';
import { VscAdd } from "react-icons/vsc";

const AddButton: React.FC = () => {
    const addHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        alert(event.currentTarget.getAttribute('title'));
    }

    return(
        <Row>
            <Col>
                <CustomButton title="Add" variant="primary" onClick={addHandler} icon={<VscAdd />} />
            </Col>
        </Row>
    );
};

export default AddButton;