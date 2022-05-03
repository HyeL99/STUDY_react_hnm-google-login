import React, { useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Navigate, useNavigate } from "react-router-dom";

function LoginGoogle({ setAuthenticate }) {
  const clientId =
    "349163810320-i194g22jcpt6jk7i7f6lublu2qto71jb.apps.googleusercontent.com";
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    window.localStorage.setItem("user_id", response.googleId);
    window.localStorage.setItem("user_email", response.profileObj.email);
    window.localStorage.setItem("user_name", response.profileObj.name);
    setAuthenticate(true);
    navigate("/");
  };

  const logout = () => {
    window.localStorage.removeItem("user_id");
    window.localStorage.removeItem("user_email");
    window.localStorage.removeItem("user_name");
    setAuthenticate(false);
  };
useEffect(()=>{
  window.localStorage.removeItem("user_id");
}, [])
  return (
    <div className="login-button">
      {localStorage?.getItem("user_id") == null ? (
        <GoogleLogin
          className="google-button"
          clientId={clientId}
          buttonText="로그인" // 버튼에 뜨는 텍스트
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      ) : (
        <GoogleLogout
          clientId={clientId}
          buttonText="로그아웃"
          onLogoutSuccess={logout}
        />
      )}
    </div>
  );
}
export default LoginGoogle;
