import List from "./List"

function App() {

  const fruits = [{id: 1, name:"Mango",calories:60},
                    {id: 2, name:"Apple",calories:40},
                    {id: 3, name:"Banana",calories:50},
                    {id: 4, name:"Grapes",calories:70},
                    {id: 5, name:"Orange",calories:30} ];

  const vegetables = [{id: 1, name:"carrot",calories:110},
                    {id: 2, name:"betroot",calories:202},
                    {id: 3, name:"potato",calories:525},
                    {id: 4, name:"corn",calories:678},
                    {id: 5, name:"brochoili",calories:389}];
  

  return (
    <>
          {fruits.length > 0 ?<List items={fruits} categorey="Fruits"/> : null }
          {vegetables.length > 0 ?<List items={vegetables} categorey="Vegetables"/> : null }
    
    </>
  );
}

export default App
