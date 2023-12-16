import React from 'react';
import Templet from '../components/Templet';
import Deshboard_img from "../images/Desbord_img.jpg"
const Singup = ({setIsLoggedIn})=>{
    return(
        <Templet 
            title="Join the millions learning to code with StudyNotion for free"
            desc1="Build skills for today,tommorrow, and beyond."
            desc2="Education to future-proof your career."
            image={Deshboard_img}
            formType="singup"
            setIsLoggedIn={setIsLoggedIn}
        />
    );
}

export default Singup;