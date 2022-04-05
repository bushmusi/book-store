const STATUS = 'CHECKING_STATUS';

const initialCatagories = [];

const createCatagory = () => ({
  type: STATUS,
});

const catagoryReducer = (state = initialCatagories, action = { type: null }) => {
  switch (action.type) {
    case STATUS:
      return 'Under Construction';
    default: return state;
  }
};

module.export = createCatagory;
export default catagoryReducer;
