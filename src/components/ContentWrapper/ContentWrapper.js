import React from 'react';

import styled from 'styled-components';

const ContentWrapper = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
)

const Wrapper = styled.main`
    border: 1px solid black;
    width: 1000px;
    height: 800px;
    background-color: rgb(255, 196, 196);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 15px;
`

export default ContentWrapper;