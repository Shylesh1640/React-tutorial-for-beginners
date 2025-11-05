
function List(){

    const fruits = [{id: 1, name:"Mango",calories:60},
                    {id: 2, name:"Apple",calories:40},
                    {id: 3, name:"Banana",calories:50},
                    {id: 4, name:"Grapes",calories:70},
                    {id: 5, name:"Orange",calories:30}];
    //alphabetical order
    //fruits.sort((a,b)=>a.name.localeCompare(b.name));
    //reverse alphabetical order
    //fruits.sort((a,b)=>b.name.localeCompare(a.name));
    //calories low to high
    //fruits.sort((a,b)=>a.calories - b.calories);
    //calories high to low
    //fruits.sort((a,b)=>b.calories - a.calories);

    //const lowcalfruits = fruits.filter((fruit)=> fruit.calories < 60);



    //const listItems = lowcalfruits.map((lowcalfruits)=><li key={lowcalfruits.id}>{lowcalfruits.name}:&nbsp;<b>{lowcalfruits.calories}</b></li>);

    const highcalfruits = fruits.filter((fruit)=> fruit.calories >= 50);

    const listItems = highcalfruits.map((highcalfruits)=><li key={highcalfruits.id}>{highcalfruits.name}:&nbsp;<b>{highcalfruits.calories}</b></li>);
    
    //const listItems = fruits.map((fruits)=><li key={fruits.id}>{fruits.name}:&nbsp;<b>{fruits.calories}</b></li>);


    return(<ol>{listItems}</ol>);

}
export default List