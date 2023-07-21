import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import useFetchData from './Hooks/useFetchData';
import User from './User';
import Message from '../../Common/Message';
import Loader from '../../Common/Loader';

const Users: React.FC = () => {
    const [showLoader, setShowLoader] = useState(false);
    const { records } = useFetchData({ endpoint : "https://dummyjson.com/users", setShowLoader : setShowLoader });
    const { users } = records;

    return (
        !showLoader ? 
            users?.length > 0 ?
                <React.Fragment>
                    <Row className="mt-2">
                        <Col sm="3" md="3">
                            S. No.
                        </Col>
                        <Col sm="3" md="3">
                            Name
                        </Col>
                        <Col sm="3" md="3">
                            Age
                        </Col>
                        <Col sm="3" md="3">
                            Gender
                        </Col>
                    </Row>
                    {
                        // Iterate over search items
                        users.map((user) => {
                            // Follow [ISP] principle and pass onnly rquired product properties
                            const filteredUser = {
                                id: user.id, 
                                firstName: user.firstName, 
                                lastName: user.lastName,
                                age: user.age,
                                gender: user.gender
                            };
                            return <User user={filteredUser}  />
                        })
                    }
                </React.Fragment>
            : 
                <Row className='mt-2'>
                    <Col>
                        <Message variant="primary" message="No record found!!!"/>
                    </Col>
                </Row>
        : <Loader />
    );
};

export default Users;