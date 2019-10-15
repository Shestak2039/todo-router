import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import AddingTodo from './AddingTodo';

import { addTodo as addTodoAction } from '../../actions/todo-actions';

const mapDispatchToProps = (dispatch) => (
    {
        addTodo: (todo) => {
            dispatch(addTodoAction(todo));
        }
    }
)

export default compose(
    connect(null, mapDispatchToProps),
    withHandlers({
        addTodo: ({ addTodo }) => (event) => {
            if (event.key === 'Enter' && event.target.value !== '') {
                addTodo(event.target.value);
                event.target.value = ''
            }
        },
    }),
)(AddingTodo);