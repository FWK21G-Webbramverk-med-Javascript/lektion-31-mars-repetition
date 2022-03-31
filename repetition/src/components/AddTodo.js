import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../actions/todoAction';

function AddTodo() {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    function handleOnKeyUp(event) {
        setTodo(event.target.value);
    }

    function handleClick() {
        dispatch(addTodo(todo));
    }

    return (
        <section>
            <input type="text" placeholder="Skriv in todo"
                onKeyUp={ handleOnKeyUp } />
            <button onClick={ handleClick }>Lägg till</button>
        </section>
    )
}

export default AddTodo;