import { INCREMENT, ADDTODO } from '../actions';

export default (todoitem =  '', action) => {
    let array = [];
    switch (action.type) {

        case ADDTODO:
        array = ['apple', 'orange', 'beees'];
        array.push(array);
        return array;
        default: 
            return array;
    }
};