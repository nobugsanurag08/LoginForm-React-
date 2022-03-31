import React, { useState } from "react";
// import ReactDOM from "react-dom";
const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alldata, setAlldata] = useState([]);
  const Confermation = (e) => {
    e.preventDefault();
    const newentry = { email: email, password: password };
    setAlldata([...alldata, newentry]);
    console.log(alldata);
  };

  return (
    <>
      <form action="" onSubmit={Confermation}>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div2>
        {alldata.map((curele) => {
          return (
            <div1>
              <p>
                {curele.email}(email) {curele.password}(password)
              </p>
              {/* <p>{curele.password}</p> */}
            </div1>
          );
        })}
      </div2>
    </>
  );
};
export default App;
