import { createContext, useReducer } from "react";

export const EventContext = createContext();

const initialState = {
  events: [],
  isLoggedIn: false
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_EVENTS":
      return { ...state, events: action.payload };

    case "LOGIN":
      return { ...state, isLoggedIn: true };

    default:
      return state;
  }
}

export const EventProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <EventContext.Provider value={{ state, dispatch }}>
      {children}
    </EventContext.Provider>
  );
};