import React, { useState, useEffect } from "react";
import axios from 'axios';

export const AccountContext = React.createContext()

export const AccountConsumer = AccountContext.Consumer;

const AccountProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "", membership: "" })
  useEffect( () => {
    axios.get("/api/users")
      .then( res => setUser(res.data))
      .catch( err => console.log(err))
  }, [])
  const updateAccount = (id, user) => {
    axios.put(`/api/users/${id}`, { user })
      .then( res => setUser(res.data))
      .catch( err => console.log(err)) 
  }
  return(
    <AccountContext.Provider value={{
      ...user,
      updateAccount: updateAccount
    }}>
      { children }
    </AccountContext.Provider>
  )
}
export default AccountProvider;