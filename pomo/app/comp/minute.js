'use client'
import {useEffect} from "react";
import {useState} from "react";


function Clock({upStage,getTicking,setWorking,Working}) {
    const [sec, setSec] = useState(0);
    const [minutes, setMinutes] = useState(getTicking);
    const option = ["pomodoro", "ShortBreak", "LongBreak"];


    useEffect(() => {
        const intervaltwo = setInterval(() => {
            if(Working){
            setMinutes(prevMinutes => {
                return prevMinutes - 1;
            });}
        }, 60000);
        return () => clearInterval(intervaltwo);
    }, [minutes,Working])
    useEffect(() => {
        const interval = setInterval(() => {
            if(Working){
            setSec(prevSec => {
                if (prevSec > 0) {
                    return prevSec - 1;
                } else if (prevSec <= 0) {
                    return 59;
                }
            });}
        }, 1000);
        return () => clearInterval(interval);
    }, [sec,Working])
    return (<>
        <div className=$"flex flex-row gap-10 ">
            {option.map((option, index) => {
                return (
                <h1 className={index==0?"bg-red-600":index==1?"bg-blue-600":"bg-amber-200 "}
                key={index}
                onClick={() => {
                    if (!Working) {
                        upStage(index);
                        setSec(0)

                    } else {
                        alert("you can not change the stage while it is working" )
                    }
                }}

                >
                {option}
                </h1>)
                })
            }
        </div>
        <h1 className="text-3xl">{getTicking()}: {sec.toString().padStart(2, '0')}</h1>
        <button onClick={()=>
           setWorking((Working)=>!Working)
        }>{Working? "stop": "start"  }</button>
    </>)
}

export default Clock;

