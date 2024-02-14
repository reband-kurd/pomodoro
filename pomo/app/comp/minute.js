'use client'
import {useEffect} from "react";
import {useState} from "react";


function Clock({setWorking, Working}) {
    const [sec, setSec] = useState(0);
    const pomodoooro=25;
    const option = ["pomodoro", "ShortBreak", "LongBreak"];
    const [pomodoro, setPomodoro] = useState(pomodoooro);
    const [ShortBreak, setShortBreak] = useState(5);
    const [LongBreak, setLongBreak] = useState(15);
    const [state, setstate] = useState(0);
    const SwitchState = (index) => {
        setstate(index)
    }

    const tickingTime = () => {
        const timeStage = {
            0: pomodoro,
            1: ShortBreak,
            2: LongBreak
        }
        return timeStage[state]
    }
    const upType = () => {
        const upstate = {
            0: setPomodoro,
            1: setShortBreak,
            2: setLongBreak
        }
        return upstate[state];
    }
    const minutes = tickingTime()
    const setMinutes = upType()

    useEffect(() => {
        const interval = setInterval(() => {
            if (Working) {
                if (sec > 0) {
                    setSec((sec) => sec - 1)
                } else if (sec === 0 && minutes > 0) {
                    setSec(59);
                    setMinutes((minute) => minute - 1);
                } else if (sec === 0 && minutes === 0) {
                    setWorking((Working) => !Working)
                    setSec(0);
                    setPomodoro(pomodoooro);
                    setLongBreak(15);
                    setShortBreak(5);
                    SwitchState(1);
                }

            }
        }, 1000);
        return () => clearInterval(interval);
    }, [sec, Working])
    return (<>
        <div
            className="flex flex-col lg:w-4/12 md:w-fit sm:w-4/5 justify-center items-center rounded bg-gray-400 bg-opacity-50 shadow-gray-800 shadow-xl">
            <div className="flex flex-row justify-center items-center lg:gap-7 lg:w-4/5 ">
                {option.map((option, index) => {
                    return (
                        <p
                            className={`bg-gray-600 text-amber-50 p-1  m-1 rounded ${index === state ? 'bg-gray-700' : 'bg-gray-600'}`}
                            key={index}
                            onClick={() => {
                                if (Working) {
                                    alert("you can not change the stage while it is working")
                                } else {
                                    SwitchState(index);
                                    setSec(0);
                                    setPomodoro(pomodoooro);
                                    setLongBreak(15);
                                    setShortBreak(5);
                                }
                            }}
                        >
                            {option}
                        </p>)
                })
                }
            </div>
            <h1 className="lg:text-9xl md:text-9xl sm:text-5xl font-bold text-white m-7">{minutes.toString().padStart(2, '0')}: {sec.toString().padStart(2, '0')}</h1>
            <button
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded lg:w-1/2 sm:1/4 lg:h-16 mb-7 mt-7 text-3xl"
                onClick={() =>
                    setWorking((Working) => !Working)
                }>{Working ? "stop" : "start"}</button>
        </div>
    </>)
}

export default Clock;

