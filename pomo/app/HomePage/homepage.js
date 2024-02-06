'use client'
import {useEffect, useState} from "react";
import Clock from "@/app/comp/minute";



function HomePage() {
   const [pomodoro,setPomodoro]=useState(25);
   const [ShortBreak,setShortBreak]=useState(5);
   const [LongBreak,setLongBreak]=useState(15);
   const [working,setworking]=useState(false);
   const[state,setstate]=useState(0);
   const SwitchState=(index)=>{
       setstate(index)
   }

   const tickingTime=()=>{
       const timeStage={
           0:pomodoro,
           1:ShortBreak,
           2:LongBreak
       }
      return timeStage[state]
   }
   const upType=()=>{
       const upstate={
           0:setPomodoro,
           1:setShortBreak,
           2:setLongBreak
       }
     return upstate[setstate];
   }

    return (<>
        <Clock
               upStage={SwitchState}
               getTicking={tickingTime}
               Working={working}
               setWorking={setworking}
        />
    </>);
}

export default HomePage;