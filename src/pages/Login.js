import React from 'react';
import Singup_img from "../images/Singup_img.jpg";
import Templet from '../components/Templet';

const Login = ({setIsLoggedIn})=>{
    return(
        <Templet
            title="Welcome Back"
            desc1="Build skill for today, tomorrow, and beyond."
            desc2="Education to future-proof your career."
            image={Singup_img}
            formtype="login"
            setIsLoggedIn={setIsLoggedIn}
        />
    );
}

export default Login;