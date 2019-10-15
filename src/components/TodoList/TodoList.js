import React from 'react';

import styled from 'styled-components';

const TodoList = ({ todos }) => (
    <List>
        {todos}
    </List>
)

const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    width: 200px;
    padding: 0;
    margin: 0;
`

export default TodoList;