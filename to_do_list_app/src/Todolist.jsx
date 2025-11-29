import React ,{useState} from "react";


function Todolist(){

    const [task,setTask]=useState(["Eat Breakfast","Go for a walk","Read a book","Write some code","Cook dinner"]);
    const [newtask,setNewtask]=useState("");

    function handleinputchange(event){
        setNewtask(event.target.value);
    }

    function handleaddtask(){

        if (newtask.trim() === "") return; // Prevent adding empty tasks

        setTask([...task,newtask]);
        setNewtask("");
    }

    function handledeletetask(index){

        const updatedTasks=[...task];
        updatedTasks.splice(index,1);
        setTask(updatedTasks);

    }

    function handlemovetaskup(index){

        if (index === 0) return; // Can't move the first task up

        const updatedTasks = [...task];
        const temp = updatedTasks[index - 1];
        updatedTasks[index - 1] = updatedTasks[index];
        updatedTasks[index] = temp;
        setTask(updatedTasks);
    }

        function handlemovetaskdown(index){

        if (index === task.length - 1) return; // Can't move the last task down

        const updatedTasks = [...task];
        const temp = updatedTasks[index + 1];
        updatedTasks[index + 1] = updatedTasks[index];
        updatedTasks[index] = temp;
        setTask(updatedTasks);

    }


    return(
        <div className="To-Do-List">
            <h1>To-Do-List</h1>

            <div>
                <input type="text" placeholder="Enter a new task" value={newtask} onChange={handleinputchange}/>
                <button className="add-button" onClick={handleaddtask}>✅</button>   

            </div>

            <ol>
                {task.map((t,index)=>(
                    <li key={index}>
                        <span className="text">{t}</span>
                        <button className="delete-button" onClick={()=>handledeletetask(index)}>❌</button> 
                        <button className="move-button" onClick={()=>handlemovetaskup(index)}>👆</button> 
                        <button className="move-button" onClick={()=>handlemovetaskdown(index)}>👇</button> 
                    </li>
                ))} 
            </ol>

        </div>
    );

}
export default Todolist;