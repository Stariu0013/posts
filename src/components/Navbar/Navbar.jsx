import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/authContext";
import MyButton from "../UI/button/MyButton";

function Navbar() {
    const {setIsAuth} = useContext(AuthContext);

    function logout() {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return <div className="navbar">
        <MyButton onClick={logout}>Выйти</MyButton>
        <div className="navbar__links">
            <Link to="/about">About page</Link>
            <Link to="/posts">Posts page</Link>
        </div>
    </div>
}

export default Navbar;