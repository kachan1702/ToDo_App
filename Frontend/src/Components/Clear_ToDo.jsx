export function Clear_ToDo() {
    return <div className="panel-block">
        <button className="button is-danger is-outlined is-fullwidth"
             onClick={() => {
                fetch("http://localhost:1000/cleardata", {
                  method: "DELETE",
                  
                  headers: {
                    "Content-type": "application/json"
                    
                  }
                }).then(async function (res) {
                  const json = await res.json();
                  
                }
      
                )
              }}>
            <span>Clear All To-Do</span>
            <span className="icon is-small">
                <i className="fa fa-times"></i>
            </span>
        </button>
    </div>
}