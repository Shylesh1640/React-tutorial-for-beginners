import React,{useState,useEffect,useRef} from 'react';

function Component() {

    const inputRef = useRef(null);
    const inputRef2 = useRef(null);



    useEffect(()=>{
        console.log('Component Rendered');
        console.log(inputRef);
    });



    function handleclick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "red";
        inputRef2.current.style.backgroundColor = "";
    }

    function handleclick2(){
        inputRef2.current.focus();
        inputRef.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "blue";
    }

    return(

        <div> 
            <button onClick={handleclick}>Click Me</button>
            <input ref={inputRef}/>
            <button onClick={handleclick2}>Click Me</button>
            <input ref={inputRef2}/>

        </div>
        
    );
}
export default Component;