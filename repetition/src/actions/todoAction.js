const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

const updateTodo = (id) => {
    return {
        type: 'UPDATE_TODO',
        payload: id
    }
}

export { addTodo, updateTodo }