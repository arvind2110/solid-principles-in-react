import React from 'react';
import { Accordion } from 'react-bootstrap';

interface IPrincipleInfo {
    title: string,
    description: string
}

interface IPrincipleInfoProps {
    data: IPrincipleInfo
}

const PrincipleInfo: React.FC<IPrincipleInfoProps> = (props: IPrincipleInfoProps) => {
    const { data } = props;
    const { title, description } = data;

    return(
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>{description}</Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default PrincipleInfo;