import React,{useState,useEffect} from 'react'; 

function Component() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")

    useEffect(()=>{
        document.title = `Count: ${count} ${color}`;
    },[count,color]);

    function addCount(){
        setCount(c => c + 1);
    }
    function subCount(){
        setCount(c => c - 1); 
    }
    function changecolor(){
        setColor(c => c==='green'?'red':'green');
    } 

    return (
        <>
        <p style={{color: color}}>Count : {count}</p>
        <button onClick={addCount}>Add </button>
        <button onClick={subCount}>Sub</button><br/>
        <button onClick={changecolor}>Change Color</button>


        
        </>
    );
}
export default Component;