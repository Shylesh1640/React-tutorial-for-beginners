import React,{useState} from "react";

function Colorpicker() {

    const [color, setColor] = useState("#ffffff");

    function handleChange(event) {
        setColor(event.target.value);
    }

    return (
        <div className="color-picker-component">
            <h1>Color Picker</h1>
            <div className="picker-container" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a color</label>
            <input type="color" value={color} onChange={handleChange} /> 
        </div>
    );

}
export default Colorpicker;