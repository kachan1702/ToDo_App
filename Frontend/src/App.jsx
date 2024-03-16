import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Create_ToDo } from './Components/Create_ToDo'
import { Todos } from './Components/Todos'
import { Clear_ToDo } from './Components/Clear_ToDo'

/*  This is hardcode value
 <Todo todo={[
        {
    title:"dvhfsdgf",
    description:"jhfgh",
    completed: false
        } 
        ]}></Todo>
*/


function App() {

 const [todos, setTodos] = useState([]);

  fetch("http://localhost:1000/gettodo")
  .then(async function(res){
    const json = await res.json();
    setTodos(json.todos);
    console.log("jsonnn>>>>>>>>>>"+json.todos);
    console.log(todos)
  })

  return (
    <div>
          <Create_ToDo> </Create_ToDo>
          <Todos todos={todos}></Todos>
          <Clear_ToDo></Clear_ToDo>
       
    </div>
   
  )
}

export default App
