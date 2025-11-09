import React,{useState} from "react"

function Newcomponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false); 

    const updateName = () => {
        setName("Shylesh")
    }
    const incrementAge = () => {
        setAge(age + 1)
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>SetName</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>isEmployed:{isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Employment Status</button>
        </div>

    );

}
export default Newcomponent