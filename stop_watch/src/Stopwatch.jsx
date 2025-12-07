import React,{useState,useRef,useEffect, use} from "react";

function Stopwatch() {

    const [isrunning,setisrunning] = useState(false);
    const [elapsedtime,setelapsedtime] = useState(0);
    const intervalref = useRef (null);
    const starttimeref = useRef (0);

    useEffect (()=>{

    },[isrunning]);

    function start(){

    }

    function stop(){

    }

    function reset(){

    }

    function formattime(){
        return "00:00:00";

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