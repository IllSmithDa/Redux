export const INCREMENT = 'INCREMENT';
export const ADDTODO  = 'ADDTODO';

export const increment = () => {
    return {
        type: INCREMENT
    }
};

export const addTodo = (listitem) => {
    return {
        type: ADDTODO
    }
}