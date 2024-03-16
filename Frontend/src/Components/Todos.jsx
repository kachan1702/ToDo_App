/* This would be the input of below function 
todos=[
    {
        title:"gym time",
        description:"go to gym"
    }
]


*/

export function Todos({ todos }) {
  return <div>



    {
      //  <h1 class="todolist"> To-Do List</h1>
      todos && todos.map(function (todo) {
        
        var taskName = todo.isDone  ? <s>todo.task</s> : todo.task;
        var taskButton=<button className="button is-small is-danger" style={{marginLeft:'auto',marginRight:'0px'}} > <i class="fa fa-minus"></i> </button>
        if(!todo.isDone){
          taskButton=<button className="button is-small is-dark" style={{marginLeft:'auto',marginRight:'0px'}}
          onClick={() => {
            fetch("http://localhost:1000/completed", {
              method: "PUT",
              body: JSON.stringify({
                _id: _id,
                isDone:true
               
              }),
              headers: {
                "Content-type": "application/json"
                
              }
            }).then(async function (res) {
              const json = await res.json();
              alert("Todo Updated");
            }
  
            )
          }} > 
          <i class="fa fa-check"></i></button>
        }
        return <a className="panel-block level" >
      
          
          <span>{taskName}</span>
          
          

          {taskButton}
          

        </a>

      })
    }



  </div>
}