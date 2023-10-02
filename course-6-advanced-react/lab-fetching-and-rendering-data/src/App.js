import React, { useEffect } from "react";

function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => {
        setUser(data["results"][0]["name"]["first"]);
      })
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("user:", user);
    // console.log("name:", user[0]["name"]["first"]);
  }, [user]);

  // conditional rendering
  return Object.keys(user).length > 0 ? (
    <div style={{ padding: "40px" }}>
      <h1>Customer data</h1>
      <h2>Name: {user}</h2>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
