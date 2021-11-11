import React, { useState } from "react";
import { auth } from "../fbase";
import AppRouter from "./Router";

function App() {
  // console.log(auth.currentUser);

  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
  console.log(auth.currentUser);
  // setInterval(() => {
  //   console.log(auth.currentUser);
  // }, 2000);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()}Nwitter </footer>
    </>
  );
}

export default App;
