import React, { useState, useEffect } from "react";
import Acordeon from "./components/Acordeon";
import CurrentAmount from "./components/CurrentAmount";
import { API } from "./api/api";
import "./App.css";

const App = () => {
  const [userTransactions, setData] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await API.userTransactions.getUsersTransactions();
      const dataUser = await API.userTransactions.getUsersData();
      setUserData(dataUser.UserAcount);
      setData(data.UserTransactions);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {userData ? (
        <CurrentAmount name={userData.name} money={userData.acountMount} />
      ) : (
        "Loading"
      )}

      {userTransactions.length > 0 ? (
        <Acordeon data={userTransactions} />
      ) : (
        <h2>There are not transactions on this account.</h2>
      )}
    </div>
  );
};

export default App;
