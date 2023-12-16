import React from 'react'
import LoginForm from './LoginForm';
import SingupForm from './SingupForm';
import {FcGoogle} from 'react-icons/fc';

const Templet = ({title,desc1,desc2,image,formType,setIsLoggedIn}) =>{
    return (
        <div className='flex justify-between w-11/12  max-w-[1160px] mx-auto py-12  gap-x-20 gap-y-0'>
            <div className='w-11/12 max-w-[450px]'>
                <h1 
                    className='text-neutral-50 font-semibold text-[1.875rem] leading-[2.375rem]'
                >   
                    {title}</h1>
                <p className='text=[1.125rem] leading[1.625rem] mt-4'>
                    <span className='text-neutral-100'>{desc1}</span>
                    <br/>
                    <span className='text-blue-200 italic'>{desc2}</span>
                </p>

                {formType==="singup"?(<SingupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

                <div className='flex w-full items-centermy-4 gap-x-2 mt-8'>
                    <div className='w-full h-[1px] bg-neutral-700'></div>
                    <p className='text-neutral-700 font-medium leading-[1.375rem]'>OR</p>
                    <div className='w-full h-[1px] bg-neutral-700'></div>
                </div>

                <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-neutral-100 border border-neutral-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                    <FcGoogle></FcGoogle>
                    <p>Singn Up with Google</p>
                </button>
            </div>
            <div className='relative w-11/12 max-w-[450px]'>
                <img src={image} alt="Students" width={558} height={504} loading='lazy'
                />
            </div>
            
        </div>
    );
}

export default Templet;