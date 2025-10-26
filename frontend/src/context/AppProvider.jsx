import React, { createContext, useState } from "react";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("Users") || null);

  const data = { user, setUser };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default AppProvider;
