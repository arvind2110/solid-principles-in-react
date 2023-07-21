import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import useFetchData from './Hooks/useFetchData';
import Loader from '../../Common/Loader';
import Message from '../../Common/Message';
import Product from './Product';

const Products: React.FC = () => {
    const [showLoader, setShowLoader] = useState(false);
    const { records } = useFetchData({ endpoint : "https://dummyjson.com/products", setShowLoader : setShowLoader });
    const { products } = records;

    return (
        !showLoader ? 
            products?.length > 0 ?
                <React.Fragment>
                    <Row className="mt-2">
                        <Col sm="4" md="4">
                            S. No.
                        </Col>
                        <Col sm="4" md="4">
                            Title
                        </Col>
                        <Col sm="4" md="4">
                            Price
                        </Col>
                    </Row>
                    {
                        // Iterate over search items
                        products.map((product) => {
                            // Follow [ISP] principle and pass onnly rquired product properties
                            const filteredProduct = {
                                id: product.id, 
                                title: product.title,
                                price: product.price
                            };
                            return <Product product={filteredProduct}  />
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

export default Products;