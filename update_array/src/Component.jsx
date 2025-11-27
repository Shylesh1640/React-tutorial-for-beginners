import React,{useState} from "react";

function Component(){

    const [foods,setFoods] = useState(["Pizza","Burger","Pasta"]);

    function handleaddfood(){

        const newfood = document.getElementById("foodinput").value;
        document.getElementById("foodinput").value = "";
        setFoods([...foods,newfood]);

    }
    function handleremovefood(index){

        setFoods(foods.filter((food,idx) => idx !== index));



    }

    return(<div>
        <h2>Foods List</h2>

        <ul>
            {foods.map((food,index) => <li key={index} onClick={() => handleremovefood(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodinput" placeholder="Enter food name" /> 
        <button onClick={handleaddfood}>Add Food</button>
        
    </div>
    );
}
export default Component;