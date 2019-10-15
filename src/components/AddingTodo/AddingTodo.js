import React from 'react';
import styled from 'styled-components';

const AddingTodo = ({ addTodo }) => (
    <div>
        <Label htmlFor="adding-todo">Add todo: </Label>
        <Input type="text" name="adding-todo" onKeyDown={addTodo}/>
    </div>
)

const Input = styled.input`
    font-size: 18px;
`

const Label = styled.label`

`

export default AddingTodo;