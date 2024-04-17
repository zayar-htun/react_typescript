import React, { useState } from "react";

type AuthUser = {
    name: string;
    email: string;
};

export default function User() {
    // const [user, setUser] = useState<AuthUser | null>(null); // null ကြီးပဲဆို error တက်မှာစိုးလို့ authuser မဟုတ်ရင် null .... အဲ့လိုမဟုတ်ရင်အောက်ကလိုရေး
    const [user, setUser] = useState<AuthUser>({} as AuthUser); 
    const handleLogin = () => {
        setUser({
            name: "Zayar",
            email: "zayyartun2842@gmail.com",
        });
    };
    const handleLogout = () => {
        setUser(null);
    };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    );
}
