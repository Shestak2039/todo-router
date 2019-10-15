import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';


const ButtonLink = ({ path, children }) => (
    <Link to={path}>
        <StyledButton variant="contained" color="primary">{children}</StyledButton>
    </Link>
)

const StyledButton = styled(Button)`
    width: 100px;
    height: 40px;
`

export default ButtonLink;