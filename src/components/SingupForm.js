import React,{useState} from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const SingupForm = ({setIsLoggedIn}) =>{
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        conformPassword:""
    })

    const [showpassword,setShowPassword] = useState(false);
    const [showconformpassword,setShowConformPassword] = useState(false);
    const [accountType,setAccountType] = useState("student");
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
        if(formData.password!==formData.conformPassword)
        {
            toast.error("Password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        }
        const finalData ={
            ...accountData,
            accountType
        }

        console.log("Printing Final Account Data ")
        console.log(finalData);
        navigate("/Deshboard");
    }
    
    return(
        <div>
            <div className="flex bg-neutral-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button onClick={()=>setAccountType("student")} 
                className={`${accountType==='student'?"bg-neutral-900 text-neutral-50":"bg-transparent text-neutral-200"} py-2 px-5 rounded-full transition-all duration-200` }>
                    Student
                </button>
                <button onClick={()=>setAccountType("instructor")}
                className={`${accountType==='instructor'?"bg-neutral-900 text-neutral-50":"bg-transparent text-neutral-200"} py-2 px-5 rounded-full transition-all duration-200` }>
                    Instructor
                </button>
            </div>
            <form onSubmit={submitHandler}>
                {/* First name last name div */}
                <div className="w-full flex gap-x-5 mx-0 mt-[20px]">
                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-neutral-50 mb-1 leading-[1.375]">First Name<sup className="text-pink-600">*</sup></p>
                        <input required type="text" name="firstName" value={formData.firstName} onChange={changeHandler} placeholder="Enter First Name"
                        className='bg-neutral-800 rounded-[0.5rem] text-neutral-50 w-full p-[12px]'></input>
                    </label>
                    <label className="w-full relative"  >
                        <p className="text-[0.875rem] text-neutral-50 mb-1 leading-[1.375]">Last Name<sup className="text-pink-600">*</sup></p>
                        <input required type="text" name="lastName" value={formData.lastNameName} onChange={changeHandler} placeholder="Enter Last Name"
                        className='bg-neutral-800 rounded-[0.5rem] text-neutral-50 w-full p-[12px]'></input>
                    </label>
                </div>
                {/* email add */}
                <div className="mt-[20px]">
                    <label>
                        <p className="text-[0.875rem] text-neutral-50 mb-1 leading-[1.375]">Email Address<sup className="text-pink-600">*</sup></p>
                        <input required type="email" name="email" value={formData.email} onChange={changeHandler} placeholder="Enter Email Address"
                        className='bg-neutral-800 rounded-[0.5rem] text-neutral-50 w-full p-[12px]'></input>
                    </label>
                </div>

                {/* createpassword and conform password */}

                <div className="w-full flex gap-x-5 mt-[20px]">
                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-neutral-50 mb-1 leading-[1.375]">Create Password<sup className="text-pink-600">*</sup></p>
                        <input required type={showpassword?("text"):("password")} name="password" value={formData.password} onChange={changeHandler} placeholder="Enter Password"
                        className='bg-neutral-800 rounded-[0.5rem] text-neutral-50 w-full p-[12px]'></input>
                        <span onClick={()=> setShowPassword((prev)=>!prev)} className="absolute right-3 top-[30px] cursor-pointer mt-1">
                        {showpassword ?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                        </span>
                    </label>
                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-neutral-50 mb-1 leading-[1.375]">Confirm Password<sup className="text-pink-600">*</sup></p>
                        <input required type={showconformpassword?("text"):("password")} name="conformPassword" value={formData.conformPassword} onChange={changeHandler} placeholder="Confirm Password"
                        className='bg-neutral-800 rounded-[0.5rem] text-neutral-50 w-full p-[12px]'></input>
                        <span onClick={()=> setShowConformPassword((prev)=>!prev)} className="absolute right-3 top-[30px] cursor-pointer mt-1">
                            {showconformpassword ?
                            
                            (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):
                            
                            (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                        </span>
                    </label>
                </div>
                <button className="w-full bg-yellow-400 rounded-[8px] font-medium text-neutral-900 px-[12px] py-[8px] mt-6">Create Account</button>
            </form>
        </div>
    );
}
export default SingupForm;