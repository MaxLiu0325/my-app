import React, { useContext, createContext } from "react";
import { useImmer } from "use-immer";

const defaultState = {
  themeColor: "white"
};

const LocalStateContext = createContext();

const useLocalState = () => {
  const [state, produce] = useContext(LocalStateContext);

  const setThemeColor = color => {
    produce(draft => void (draft.themeColor = color));
  };

  return { ...state, setThemeColor };
};

const LocalStateProvider = ({ children }) => {
  const [state, produce] = useImmer({ ...defaultState });
  return (
    <LocalStateContext.Provider value={[state, produce]}>
      {children}
    </LocalStateContext.Provider>
  );
};

export default useLocalState;
export { LocalStateProvider };
