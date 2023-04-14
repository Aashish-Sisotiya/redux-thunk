import { useEffect, useState } from "react";
import "./App.css";
import store from "./Store";
import { useDispatch, useSelector } from "react-redux";
import { UserAction } from "./redux/actions/UserAction";
import Users from "./Users";

function App() {
  // console.log(store);
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  // console.log(userList);

  const { loading, users, error } = userList;
  // console.log(error);
  useEffect(() => {
    dispatch(UserAction());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>React-thunk</h1>
      {loading ? (
        <h2>Loading ...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Users users={users} />
      )}
    </div>
  );
}

export default App;
