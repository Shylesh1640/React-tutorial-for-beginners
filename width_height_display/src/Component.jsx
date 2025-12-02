import React,{useState,useEffect} from 'react';

function Component() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function updateDimensions() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', updateDimensions);
        console.log("Event Listener Added");

        return () =>{
            window.removeEventListener('resize', updateDimensions);
            console.log("Event Listener Removed");
        }
    },[]);

    useEffect(() => {
        document.title=`size: ${width}x${height}`;
    });

    return(
        <>
        <p>Width: {width}px</p>
        <p>Height: {height}px</p>
        </>
    );
}

export default Component;