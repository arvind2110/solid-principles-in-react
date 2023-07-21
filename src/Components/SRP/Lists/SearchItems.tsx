import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import useSearchItems from '../Hooks/useSearchItems';
import SearchItem from './SearchItems/SearchItem';
import Loader from '../../Common/Loader';
import Message from '../../Common/Message';

interface ISearchItemsProps {
    endpoint: string
}

const SearchItems: React.FC<ISearchItemsProps> = (props: ISearchItemsProps) => {
    const [showLoader, setShowLoader] = useState(false);
    const { endpoint } = props;
    const { searchItems } = useSearchItems({ endpoint : endpoint, setShowLoader: setShowLoader });
    
    return (
        !showLoader ? 
            searchItems?.length > 0 ?
                <React.Fragment>
                    <Row className="mt-2">
                        <Col sm="3" md="2">
                            S. No.
                        </Col>
                        <Col sm="3" md="2">
                            Title
                        </Col>
                        <Col sm="3" md="2">
                            Price
                        </Col>
                        <Col sm="3" md="6">
                            Description
                        </Col>
                    </Row>
                    {
                        // Iterate over search items
                        searchItems.map((searchItem) => {
                            // Follow [ISP] principle and pass onnly rquired product properties
                            const filteredSearchItem = {
                                id: searchItem.id, 
                                title: searchItem.title, 
                                description: searchItem.description,
                                price: searchItem.price
                            };
                            return <SearchItem searchItem={filteredSearchItem}  />
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

export default SearchItems;