import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
function Auth() {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  // input의 onChange를 누를때마다 onChange함수로 온다. 그리고 event실행. 여기서 event는 무슨 일이 일어났는가를 뜻함.
  // 이 코드에서는 사용자가 입력시, input의 변경(name, password_value)이 일어남.
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  //onSubmit을 preventDefualt해놓지 않으면 Login클릭시 웹페이지가 새로고침이 되어버림;; 그럴때마다 React코드와 state들이 사라짐.
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        // create account
        const data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        // log in
        const data = await signInWithEmailAndPassword(auth, email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };
  // newAccount의 이전 값을 가져와서 그 값에 반대되는 것을 리턴한다.
  const toggleAccount = () => setNewAccount((prev) => !prev);

  //Social login 연동
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;

    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }
    await signInWithPopup(auth, provider);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange} />
        <input name="password" type="password" placeholder="password" required value={password} onChange={onChange} />
        <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
        {error}
      </form>
      <span onClick={toggleAccount}> {newAccount ? "Sign In" : "Create Account"}</span>
      <div>
        <button onClick={onSocialClick} name="google">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Continue with Github
        </button>
      </div>
    </div>
  );
}

export default Auth;
