const STATUS = 'CHECKING_STATUS';

const initialCatagories = [];

const createCatagory = () => {
    return {
        type: STATUS
    }
}

export default catagoryReducer = (state = initialCatagories, action = {type: null}) => {
    switch(action.type) {
        case STATUS:
            return "Under Construction";
        default: return state
    }
}

modules.export = createCatagory;