import { styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    label: string;
    url: string;
}

const LinkStyled = styled(Link)({
    color: 'white',
    textDecoration: 'none',

    ":hover": {
        color: 'white'
    }
});

const UrlLink: React.FC<IProps> = ({ label, url}) => {

    return (
        <LinkStyled to={url}>
            {label}
        </LinkStyled>
    );
}

export default UrlLink;