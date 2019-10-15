import React from 'react';

import styled from 'styled-components';

const TodoItem = ({ message, deleteTodo, ableEdit }) => (
    ableEdit 
    ?   <EditItem onClick={deleteTodo}>
            <Text>{message}</Text>
        </EditItem>
    :   <Item>
            <Text>{message}</Text>
        </Item>  
)

const Item = styled.li`
    display: inline;
    border: 1px solid rgb(252, 119, 221);
    padding-left: 10px;
    margin-bottom: 10px;

    &:hover {
        background-color: rgb(255, 255, 255);
        color: rgb(252, 119, 221);
    }
`

const EditItem = styled(Item)`
    cursor: pointer;
`

const Text = styled.p`

`

export default TodoItem;