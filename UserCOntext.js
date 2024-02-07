import { createContext, useState } from "react";

// created to access userID method anywhere, so we will give it to app.js then

const UserType = createContext();

const UserContext = ({ children }) => {
  const [userId, setUserId] = useState("");

  return (
    <UserType.Provider value={{ userId, setUserId }}>
      {children}
    </UserType.Provider>
  );
};

export { UserType, UserContext };
