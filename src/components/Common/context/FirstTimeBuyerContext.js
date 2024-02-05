import React from "react";

const FirstBuyerContext = React.createContext();

export const useFirstBuyer = () => React.useContext(FirstBuyerContext);

export const FirstBuyerProvider = ({ children }) => {
  const [state, setState] = React.useState(null);

  return (
    <FirstBuyerContext.Provider value={{ state, setState }}>
      {children}
    </FirstBuyerContext.Provider>
  );
};
