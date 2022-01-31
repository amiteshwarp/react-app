import React from "react";

function Login( props ) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url:'admin' })
    };
 
    fetch( "http://api.residentinsuredev.com/auth/sso_url", requestOptions )
      .then(res => res.json())
      .then(
        (result) => {
          props.setToken( result.token );
          window.location.href = result.sso_url;
        },
        (error) => {
          props.setToken(NULL);
          setError(error);
        }
      );
  return (
    <div>
      <h2>Login</h2>
    </div>
  );
}
export default Login;