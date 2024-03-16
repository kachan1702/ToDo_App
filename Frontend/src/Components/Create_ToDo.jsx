import { useState } from "react"

export function Create_ToDo() {

  const [task, setTask] = useState("");
  // const [description, setDescription]=useState("");

  const boxStyle = {
    paddingLeft: '30%',
    paddingRight: '30%',
    paddingTop: '5%',
    paddingBottom: '5%'
  }
  const inputStyle = {
    borderRadius: '0%',
    marginRight: '10px'
  }
  return <div>
    {/* <article className="panel is-info">
      <p className="panel-heading" style={{ textAlign: 'center' }}>
        TO-DO List
      </p>
    </article> */}


    <div className="panel-block">

      <input className="input is-info" type="text" style={inputStyle}
        onChange={function (e) {
          const value = e.target.value;
          setTask(e.target.value)
          console.log("hdcvsdgcdc>>>"+task)
        }} placeholder="Enter your todo" ></input>

      <button className="button is-primary" style={{ borderRadius: '0%' }}
        onClick={() => {
          fetch("http://localhost:1000/todo", {
            method: "POST",
            body: JSON.stringify({
              task: task,
              isDone:false
             
            }),
            headers: {
              "Content-type": "application/json"
              
            }
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo Created");
          }

          )
        }}>
        <i className="fa fa-plus"></i>
      </button>

    </div>
  </div>





  // return <div>
  // <section class="hero is-success">
  //   <div class="hero-body">
  //     <p class="title" style={{textAlign:"center"}}>
  //     TO-DO APP
  //     </p>

  //   </div>
  // </section>

  //   <div>
  // <input type="text" class="input-box" style={{padding:10, margin:10}} 
  // onChange={function(e){
  //     const value=e.target.value;
  //     setTitle(e.target.value)
  // }}
  // placeholder="Add a title"></input>


  // <input type="text" class="input-box" style={{padding:10,margin:10}}
  // onChange={function(e){
  //     const value=e.target.value;
  //     setDescription(e.target.value)
  // }} placeholder="Enter description"></input><br></br>

  // <button class="button" style={{padding:10,margin:10}}
  // onClick={()=>{
  //     fetch("http://localhost:1000/todo",{
  //       method:"POST",
  //       body: JSON.stringify({
  //         title:title,
  //         description:description
  //       }) ,
  //       headers:{
  //         "Content-type":"application/json"
  //       } 
  //     }).then(async function(res){
  //         const json= await res.json();
  //         alert("Todo Created");
  //     }

  //     )
  // }} >Add a To-Do</button></div>
  // </div>


}