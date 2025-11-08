

function Button(){

    const handleClick = (e) => e.target.textContent = "Clicked!🐦‍🔥";

    return(<button onDoubleClick={(e) => handleClick(e)}>Click 🫠</button>);






























    // let count = 0;

    // const handleClick = (name) => {
    //     if(count <5){
    //         count +=1;
    //         console.log(`${name} you clicked me ${count} times`);
    //     }
    //     else{
    //         console.log(`Stop clicking me ${name}!`);
    //     }
    // }

    //const handleClick2 = (name) => console.log(`${name} stop clicking me!`);

    // return(<button onClick={() => handleClick("Shylesh")}>Click 🫠</button>);
    
}
export default Button;