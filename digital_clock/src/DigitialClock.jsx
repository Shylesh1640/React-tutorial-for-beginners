import React,{useState,useEffect} from 'react';

function DigitialClock() {

    const [time,setTime]=useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() =>{
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    function formatTimeUnit() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12; // Convert to 12-hour format

        return `${padzero(hours)}:${padzero(minutes)}:${padzero(seconds)} ${meridiem}`;
    }

    function padzero(number) {
        return number < 10 ? `0${number}` : number;
    }

    return (
        <div className='clock-container'>

            <div className='clock'>
                <span>{formatTimeUnit()}</span>
            </div>
        </div>
    );
}

export default DigitialClock;