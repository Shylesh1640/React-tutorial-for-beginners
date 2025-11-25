import React, {useState} from 'react';
function Counter(){
    
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
    }
    
    const decrement = () => {
        setCount(count => count - 1);
        setCount(count => count - 1);
        setCount(count => count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className='counter'>
            <p className='count-display'>{count}</p>
            <button className='counter-button' onClick={increment}>Increment</button>
            <button className='counter-button' onClick={reset}>Reset</button>
            <button className='counter-button' onClick={decrement}>Decrement</button>
            
        </div>
    );
}
export default Counter;