import React from "react"
import {useDispatch} from "react-redux"
import {editCheck,editname} from "../JS/action/action"
import 'bootstrap/dist/css/bootstrap.min.css';


import {useState} from "react"

function Edit(props) {
    const [toggleEdit, setToggleEdit] = useState(false)
   
    var [newname, setNewname] = useState("")
    const new_name=(x)=>{setNewname(x)}

    const dis=useDispatch();
    const edittask=(x)=>{
        switch(x.isDone)
        {case 1:x.isDone=0;break;
            case 0:x.isDone=1;break;
            default:x.isDone=0;
        
        }
        dis(editCheck(x))
    }
    const editnewname=(x)=>{
        x.name=newname;
        dis(editname(x))
    }
    const toggle=()=>{
        setToggleEdit(!toggleEdit)
    }

    
    return (
        <div className="container">
             <div className="row" >
<div className="col">
    
   
    
                <button className="btn btn-outline-info" onClick={()=>toggle()}>Toggle Edit</button>
                {toggleEdit===true? <> <button className="btn btn-outline-primary" onClick={()=>edittask(props.e)}> Set to Done </button> 
    <input type="test" onChange={(e)=>new_name(e.target.value)} />
    <button className="btn btn-outline-success" onClick={()=>editnewname(props.e)}> Change name </button>  </>:null}
    
       
       
    <button type="button" class="btn btn-outline-secondary"> {props.e.name==="" ? "Task "+props.e.id:props.e.name} </button>
         {props.e.isDone===1? <button type="button" style={{pointerEvents:"none"}} class="btn btn-outline-success">Success</button>:null }
</div >
            </div>
        </div>
    )
}

export default Edit
