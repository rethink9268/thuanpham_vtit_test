import React, { useContext, useEffect, useState } from "react";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginToggle, setLoginToggle] = useState(false);

  const getLocalStorageUser = () => {
    const user = localStorage.getItem("user");
    return JSON.parse(user);
  };

  const setLocalStorageUser = ({ name }) => {
    if (name) {
      localStorage.setItem("user", JSON.stringify(name));
    }
    setUser(getLocalStorageUser());
  };

  useEffect(() => {
    setUser(getLocalStorageUser());
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loginToggle,
        setLoginToggle,
        setLocalStorageUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
