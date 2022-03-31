import './TodoItem.css';
import { useDispatch } from 'react-redux';

import { updateTodo } from '../actions/todoAction';

function TodoItem(props) {
    const dispatch = useDispatch();
    const { task, done, id } = props;
    let doneText = 'Ej klar';

    if (done) {
        doneText = 'Klar';
    }

    function handleClick() {
        dispatch(updateTodo(id));
    }

    return (
        <li className='todo-item' onClick={ handleClick }>
            <span className='task'>{ task }</span>
            <span className='done'>{ doneText }</span>
        </li>
    );
}

export default TodoItem;