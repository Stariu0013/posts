import React, {useContext} from 'react';
import MyInput from "../UI/input/MuInput";
import MyButton from "../UI/button/MyButton";
import {AuthContext} from "../../context/authContext";

function Login() {
    const {setIsAuth} = useContext(AuthContext);

    function login(event) {
        event.preventDefault();

        localStorage.setItem('auth', 'true');
        setIsAuth(true);
    }

    return <div>
        <h1>Страница для логина</h1>
        <form onSubmit={login}>
            <MyInput type="text" placeholder="Введите логин"/>
            <MyInput type="password" placeholder="Введите пароль"/>
            <MyButton >Войти</MyButton>
        </form>
    </div>
}

export default Login;