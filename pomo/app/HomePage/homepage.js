'use client'
import {useEffect, useState} from "react";
import Clock from "@/app/comp/minute";



function HomePage() {

   const [working,setworking]=useState(false);
   const[state,setstate]=useState(0);


    return (<>
        <div className="flex flex-col justify-center items-center mt-10 select-none">
        <Clock

               Working={working}
               setWorking={setworking}

        /></div>
    </>);
}

export default HomePage;