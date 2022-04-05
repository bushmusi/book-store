const ADD = 'ADD_BOOK';
const REMOVE = 'REMOVE_BOOK';

const initialBookList = [];

const addBook = obj => {
    return {
        type: ADD,
        payload: obj
    }
}

const removeBook = id => {
    return {
        type: REMOVE,
        payload: id
    }
}

export default bookReducre = (state = initialBookList,action ={type: null}) => {
    switch(action.type) {
        case ADD:
            return [
                ...state,
                action.payload
            ];
        case REMOVE:
            {
                const payload = action;
                return state.filter(item => item.id !== payload.id);
            }
        default:
            return state;
    }
}

modules.export = [removeBook,addBook];