import React from 'react'
import {useState} from "react"
import {useSelector,useDispatch} from "react-redux"
import {add_task,changek} from "../JS/action/action"
import 'bootstrap/dist/css/bootstrap.min.css';


function AddTask() {
    const todo=useSelector((state)=>state.todoTask)
  const count=useSelector((state)=>state.int)
  const k=useSelector((state)=>state.k)
  const dispatch = useDispatch();

  var [name, setName] = useState("")
  
  const addingname=(x)=>setName(name=x);


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        Add New Task
                    </div>
                    <div className="col-5">
             <input type="text" onChange={(e)=>addingname(e.target.value)}></input>
             </div>
             <div className="col-3">
    <button className="btn btn-outline-primary" onClick={()=>dispatch(add_task({id:count,name:name,isDone:0}))}>Add Task</button>
      </div>
      </div>
      <div className="row">
          <div className="col-12" style={{textAlign:"center"}}><button className="btn btn-success" onClick={()=>dispatch(changek(k))}>{k===2 ? "Filter ALL":k===1? "Filter Done Only":"Filter Not Done only"}</button>
       </div>
      </div>
      </div>
    
           
        </div>
    )
}

export default AddTask
