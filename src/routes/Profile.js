import { auth } from "fbase";
import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  // useHistory가 useNavigate로 바뀐듯. (react router v6부터)
  const navigate = useNavigate();
  const onLogOutClick = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
}

export default Profile;
