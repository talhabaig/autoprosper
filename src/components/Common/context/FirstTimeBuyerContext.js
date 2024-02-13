import React from "react";

const FirstBuyerContext = React.createContext();

export const useFirstBuyer = () => React.useContext(FirstBuyerContext);

export const FirstBuyerProvider = ({ children }) => {
  const [state, setState] = React.useState({
    Preferred_car_brand: [],
    PurposeOfUse: [],
  });
  console.log("logging in context", state);


  return (
    <FirstBuyerContext.Provider value={{ state, setState }}>
      {children}
    </FirstBuyerContext.Provider>
  );
};
