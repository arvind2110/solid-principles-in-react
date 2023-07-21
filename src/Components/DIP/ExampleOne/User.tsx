import React from 'react';
import { Col, Row } from 'react-bootstrap';

interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    gender: string,
    age: number
}

interface IUserProps {
    user: IUser
}

const User: React.FC<IUserProps> = (props: IUserProps) => {
    const { user } = props;
    const {id, firstName, lastName, age, gender} = user;

    return (
        <Row className='mt-2' key={"user-" + id}>
            <Col sm="3" md="3">
                {id}
            </Col>
            <Col sm="3" md="3">
                {firstName + " " + lastName}
            </Col>
            <Col sm="3" md="3">
                {age}
            </Col>
            <Col sm="3" md="3">
                {gender}
            </Col>
        </Row>
    )
};

export default User;