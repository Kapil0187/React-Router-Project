import React from "react";
import {useState} from 'react';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const LoginForm = ({setIsLoggedIn}) =>{

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        email:"",password:""
    })

    const[showpassword,setShowPassowrd] = useState(false);
    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/deshboard");
    }

    return(
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
            <label className="w-full">
                <p className="text-[0.875rem] text-neutral-50 mb-1 leading-[1.375]">Email Address<sup className="text-pink-600">*</sup></p>
                <input required type="email" value={formData.email} name="email" onChange={changeHandler} placeholder="Enter email id"
                className='bg-neutral-800 rounded-[0.5rem] text-neutral-50 w-full p-[12px]'>
                </input>
            </label>
            <label className="w-full relative">
                <p className="text-[0.875rem] text-neutral-50 mb-1 leading-[1.375]">Password<sup className="text-pink-600">*</sup></p>
                <input required type={showpassword?("text"):("password")} name="password" value = {formData.password} onChange={changeHandler} placeholder="Enter Password"
                 className='bg-neutral-800 rounded-[0.5rem] text-neutral-50 w-full p-[12px]'
                >
                </input>

                <span onClick={()=> setShowPassowrd((prev)=>!prev)} className="absolute right-3 top-[30px] cursor-pointer mt-1">
                    {showpassword ?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                </span>

                <Link to="#">
                    <p className="text-xs mt-1 text-blue-500 max-w-max ml-auto">
                        Forgot Password
                    </p>
                </Link>
            </label>
            <button className="bg-yellow-400 rounded-[8px] font-medium text-neutral-900 px-[12px] py-[8px] mt-6">
                Sign In
            </button>
        </form>
    );
}
export default LoginForm;