import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Dashboard() {
  const [token, setToken] = useState();
  let [params] = useSearchParams();

  useEffect(() => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url:'admin' })
    };
    fetch( "http://api.residentinsuredev.com/auth/parse_saml", requestOptions )
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          setToken(null);
          setError(error);
          window.location.href = "https://localhost:3000/login";
        }
      )
   }, []);

  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}