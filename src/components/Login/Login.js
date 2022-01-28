import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function Login( props ) {
  let navigate = useNavigate();
  //const [abc, setAbc] = useState();

  useEffect(() => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url:'admin' })
    };
    fetch( "http://api.residentinsuredev.com/auth/sso_url", requestOptions )
      .then(res => res.json())
      .then(
        (result) => {
          //props.setToken( result.token );
          //setAbc( result.sso_url );
          //console.log( 111111 );
          //navigate( "https://sso.entratadev.com/auth/authenticate" + result.sso_url, { replace: true } );
          //props.history.push("/dashboard");
          window.location.replace( "https://sso.entratadev.com/auth/authenticate" + result.sso_url );
        },
        (error) => {
          props.setToken(NULL);
          setError(error);
        }
      )
   }, []);
   /*
   useEffect(() => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username:'aprasad', password:'Xento123' })
    };
    if( abc ) {
      fetch( "https://sso.entratadev.com/auth/authenticate" + abc, requestOptions )
        .then(res => res.json())
        .then(
          (result) => {
            //console.log( result );
            navigate( "https://sso.entratadev.com/auth/authenticate" + result.sso_url );
            //props.history.push("/dashboard");
            //window.location.href = "https://sso.entratadev.com/auth/authenticate" + result.sso_url;
          },
          (error) => {
            props.setToken(null);
            setError(error);
          }
        )
    }
   }, [ abc ]);
   */
  return (
    <div>
      <h2>Login</h2>
    </div>
  );
}
export default Login;
//d82dcb517ba199aeb6c5549711802a03a0b9725c