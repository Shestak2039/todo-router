import { compose, withHandlers } from 'recompose';

import TodoItem from './TodoItem';

export default compose(
    withHandlers({
        deleteTodo: ({ id, deleteTodo }) => () => {
            deleteTodo(id);
        }
    }),
)(TodoItem);