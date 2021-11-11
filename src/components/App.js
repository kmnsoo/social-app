import React, { useEffect, useState } from "react";
import { auth } from "../fbase";
import AppRouter from "./Router";

function App() {
  const [init, setInit] = useState(false);
  //
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      // init이 fasle면 아래 리턴의 라우터를 숨긴다. 즉, 로그인이 되면 AppRouter작동(이동)
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
      <footer>&copy; {new Date().getFullYear()}Nwitter </footer>
    </>
  );
}

export default App;
