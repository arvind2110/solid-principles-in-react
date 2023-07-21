import React from 'react';
import { Button } from 'react-bootstrap';

interface ICustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string,
    variant: string,
    active?: boolean
    disabled?: boolean
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    icon: React.ReactNode
}

const CustomButton: React.FC<ICustomButtonProps> = (props: ICustomButtonProps) => {
    const { title, icon, ...rest } = props;

    return(
        <Button title={title} {...rest} >
          {title} {icon}
        </Button>
    );
};

export default CustomButton;