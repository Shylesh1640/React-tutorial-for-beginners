import React,{useState,useRef,useEffect, use} from "react";

function Stopwatch() {

    const [isrunning,setisrunning] = useState(false);
    const [elapsedtime,setelapsedtime] = useState(0);
    const intervalref = useRef (null);
    const starttimeref = useRef (0);

    useEffect (()=>{
        if (isrunning){
            intervalref.current = setInterval (()=> {
                setelapsedtime (Date.now() - starttimeref.current);

            },10);
        }

        return() =>{
            clearInterval (intervalref.current);
        }

    },[isrunning]);

    function start(){

        setisrunning(true);
        starttimeref.current = Date.now() - elapsedtime;

    }

    function stop(){
        setisrunning(false);

    }

    function reset(){
        setelapsedtime (0);
        setisrunning(false);

    }

    function formattime(){

        let hours = Math.floor (elapsedtime / 3600000);
        let minutes = Math.floor ((elapsedtime % 3600000) / 60000);
        let seconds = Math.floor ((elapsedtime % 60000) / 1000);
        let milliseconds = Math.floor ((elapsedtime % 1000) / 10);
        return `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}:${milliseconds.toString().padStart(2,'0')}`;

    }


    return(
        <div className="stopwatch">
            <div className="display">{formattime()}</div>
            <div className="controls">
                <button onClick={start} className="start">Start</button>
                <button onClick={stop} className="stop">Stop</button>
                <button onClick={reset} className="reset">Reset</button>

            </div>
            
        </div>
    );
}

export default Stopwatch;