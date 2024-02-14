'use client'
import {useEffect, useState} from "react";
import Clock from "@/app/comp/minute";
import Navbar from "@/app/comp/navbar";


function HomePage() {

   const [working,setworking]=useState(false);
   const[state,setstate]=useState(0);


    return (<>
        <Navbar/>
        <div className="flex flex-col justify-center items-center mt-10 select-none">
        <Clock
               Working={working}
               setWorking={setworking}
        />
        </div>
    </>);
}

export default HomePage;