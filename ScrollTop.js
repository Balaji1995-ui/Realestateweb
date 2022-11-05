import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
function ScrolltoTop(){
    const [backTopButton ,setBackToTopButton]=useState(false);
    
    useEffect(()=>{
        window.addEventListener('scroll',() =>{
            if(window.scrollY >20){
                setBackToTopButton(true)
            }
            else{
                setBackToTopButton(false)
            }
        })
    },[])
    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return(
        <div>
            {backTopButton &&(
<Button onClick={scrollUp}  variant="contained"
><KeyboardDoubleArrowUpIcon/></Button>
            )
               
            }

        </div>
    )
}
export default ScrolltoTop;