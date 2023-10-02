import React, { useEffect } from "react";

function App() {
  const [users, setUsers] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.log(error));
  };

  // Only call once
  React.useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("user:", users);
  }, [users]);

  // conditional rendering
  return Object.keys(users).length > 0 ? (
    <div style={{ padding: "40px" }}>
      <h1>Customer data</h1>
      <h2>
        Name: {users.results[0].name.first} {users.results[0].name.last}
      </h2>
      <img
        src={users.results[0].picture.large}
        alt={"User Image"}
        width={200}
      />
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
