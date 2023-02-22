import { ADD_TO_PROP, REMOVE_ITEM } from "../Types";

const PropReducer = (state, action) => {
  switch (action.type) {
    
    case ADD_TO_PROP: {
      return {
        ...state,
        propItems: [...state.propItems, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        propItems: state.propItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export default PropReducer;