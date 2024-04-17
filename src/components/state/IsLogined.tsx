import React, { useState } from "react";

export default function IsLogined() {
    const [isLogin, setIsLogin] = useState(false);
    const handelLogin = () => {
        setIsLogin(true);
    };
    const handleLogout = () => {
        setIsLogin(false);
    };
    return (
        <div>
            <button onClick={handelLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>{isLogin ? "User is Login" : "User is Logout"}</div>
        </div>
    );
}
