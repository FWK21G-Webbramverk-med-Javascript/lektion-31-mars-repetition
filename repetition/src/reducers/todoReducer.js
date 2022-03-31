const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            // En alternativ variant till nedanstående

            // const newArray = [...state.todos];
            // newArray.push({ id: state.todos.length, task: action.payload });


            // return {
            //     ...state,
            //     todos: newArray
            // }
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length,
                        task: action.payload,
                        done: false
                    }
                ]
            }
        case 'UPDATE_TODO':
            // En alternativ variant till nedanstående

            // const newArray = [...state.todos];
            // const updatedArr = newArray.map((todo) => {
            //     if (todo.id !== action.payload) {
            //         return todo;
            //     }

            //     todo.done = !done;
            // });

            // return {
            //     ...state,
            //     todos: updatedArr
            // }

            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            done: !todo.done
                        }
                    }

                    return todo;
                })
            }

        default:
            return state;
    }
}

export default todoReducer;