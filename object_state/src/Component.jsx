import React, {useState} from 'react';

function Component(){
    const [car, setCar] = useState({year:2025,
                                    make:"Benz",
                                    model:"Gvagon"});

    function handleYearChange(event){
        setCar({...car, year: event.target.value})

    }
    function handleMaChange(event){
        setCar({...car, make: event.target.value})

    }
    function handleModelChange(event){
        setCar({...car, model: event.target.value})    

    }

    return(
        <div>
            <p>Your Favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year}onChange={handleYearChange}/><br/>
            <input type="text" value={car.make}onChange={handleMaChange}/><br/>
            <input type="text" value={car.model}onChange={handleModelChange}/><br/>
        </div>
    );
}

export default Component;