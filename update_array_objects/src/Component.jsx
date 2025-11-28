import React, {useState} from "react";

function Component() {

    const [cars, setCars] = useState([]);
    const [caryear, setCarYear] = useState(new Date().getFullYear());
    const [carmake, setCarMake] = useState("");
    const [carmodel, setCarModel] = useState("");

    function handleaddcar(){

        const newCar = {
            make: carmake,
            model: carmodel,
            year: caryear
        };

        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }

    function handleremovecar(index){


        setCars(c => c.filter((_, i) => i !== index));

    }

    function handlecarmake(event) {
        setCarMake(event.target.value);
    }

    function handlecarmodel(event) {
        setCarModel(event.target.value);

    }

    function handlecaryear(event){

        setCarYear(event.target.value);

    }
    

    return(
        <div>
            <h2>Car List</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => handleremovecar(index)}>{car.year} {car.make} {car.model}</li>
                ))}

            </ul>
            <input type="text" placeholder="Car Make" value={carmake} onChange={handlecarmake} />
            <input type="text" placeholder="Car Model" value={carmodel} onChange={handlecarmodel} />
            <input type="number" placeholder="Car Year" value={caryear} onChange={handlecaryear} />
            <button onClick={handleaddcar}>Add Car</button>
            <button onClick={() => handleremovecar()}>Remove Car</button>
        </div>
    );
}
export default Component;