import React, { createContext, useContext, useReducer } from "react";

type PreferenceProviderType = {
  children: React.ReactNode;
};

type InitialStateType = {
  theme: string;
};

type ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<{ type: string; payload?: any }>;
};
const initialState = {
  theme: "dark",
};

export const PreferenceContext = createContext<ContextType>({} as ContextType);
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const localState = JSON.parse(localStorage.getItem("preferenceState")!);
document.body.style.backgroundColor = localState.theme === "dark" ? "#151c28" : "#fff"
export const preferenceReducer = (state: InitialStateType, action: any) => {
  switch (action.type) {
    case "DARK":
      document.body.style.backgroundColor = "#151c28";
      return {
        ...state,
        theme: "dark",
      };

    case "LIGHT":
      document.body.style.backgroundColor = "#fff";
      return {
        ...state,
        theme: "light",
      };

    default:
      return state;
  }
};

export const PreferenceProvider = ({ children }: PreferenceProviderType) => {
  const [state, dispatch] = useReducer(
    preferenceReducer,
    localState || initialState
  );

  React.useEffect(() => {
    localStorage.setItem("preferenceState", JSON.stringify(state));
  }, [state]);

  return (
    <PreferenceContext.Provider value={{ state, dispatch }}>
      {children}
    </PreferenceContext.Provider>
  );
};

export const usePreference = () => useContext(PreferenceContext);
