'use client'
import {useEffect} from "react";
import {useState} from "react";


function Clock({setWorking,Working}) {
    const [sec, setSec] = useState(0);

    const option = ["pomodoro", "ShortBreak", "LongBreak"];
    const [pomodoro,setPomodoro]=useState(25);
    const [ShortBreak,setShortBreak]=useState(5);
    const [LongBreak,setLongBreak]=useState(15);
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
        return upstate[state];
    }
    const minutes=tickingTime()
    const setMinutes=upType()

    useEffect(() => {
        const interval = setInterval(() => {
          if(Working){
           if(sec>0){
               setSec((sec)=>sec-1)
           }
           else if(sec===0&&minutes>0){
               setSec(59);
               setMinutes((minute)=>minute-1);
           }
           else if(sec===0&&minutes===0){
               SwitchState(1);
           }

        }
        }, 1000);
        return () => clearInterval(interval);
    }, [sec,Working])
    return (<>
        <div className="flex flex-col justify-center items-center rounded bg-gray-400 bg-opacity-50 shadow-gray-800 shadow-xl">
        <div className="flex flex-row gap-10  m-3">
            {option.map((option, index) => {
                return (
                <h1
                    className={`bg-gray-600 text-amber-50 p-1 text-xl m-1 rounded ${index === state ? 'bg-gray-500' : 'bg-gray-600'}`}
               key={index}
                onClick={() => {
                    if (Working) {
                        alert("you can not change the stage while it is working" )
                    } else {
                        SwitchState(index);
                        setSec(0);
                    }
                }}
                >
                {option}
                </h1>)
                })
            }
        </div>
        <h1 className="text-9xl font-bold text-white mt-7">{minutes.toString()
        }: {sec.toString().padStart(2, '0')}</h1>
        <button
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-1/2 h-16 mb-7 mt-7 text-3xl"
            onClick={()=>
           setWorking((Working)=>!Working)
        }>{Working? "stop": "start"  }</button>
        </div>
    </>)
}

export default Clock;

