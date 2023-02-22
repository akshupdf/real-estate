import { useReducer } from "react";
import PropContext from "./PropContext";
import PropReducer from "./PropReducer";
import {  ADD_TO_PROP, REMOVE_ITEM } from "../Types.js";

const PropState = ({ children }) => {
  const initalState = {
    PropItems: []
  };

  const [state, dispatch] = useReducer(PropReducer, initalState);

  const addToProp = (item) => {
    dispatch({ type: ADD_TO_PROP, payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  return (
    <PropContext.Provider
      value={{
        propItems: state.propItems,
        addToProp,
        removeItem,
      }}
    >
      {children}
    </PropContext.Provider>
  );
};

export default PropState;