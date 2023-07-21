import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CustomButton from './CustomButton';
import { VscChromeMinimize } from "react-icons/vsc";

const DeleteButton: React.FC = () => {
    const deleteHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        alert(event.currentTarget.getAttribute('title'));
    }

    return(
        <Row>
            <Col>
                <CustomButton title="Delete" variant="danger" disabled={true} onClick={deleteHandler} icon={<VscChromeMinimize />} />
            </Col>
        </Row>
    );
};

export default DeleteButton;