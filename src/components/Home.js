import React from "react";
import { useAuth } from "../context/authContext";

export function Home() {
  const { user } = useAuth(); //accedemos solo al valor user del objeto que devuelve useAuth
  const loginCheck = user.login.toString();
  return (
    <div>
      <div>Home</div> <div>{loginCheck}</div>
    </div>
  );
}
