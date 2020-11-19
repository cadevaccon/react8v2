import React from 'react'
import {useSelector} from "react-redux"
import Edit from "./Edit"

function Edittask() {
    const todo=useSelector((state)=>state.todoTask)
    const k=useSelector((state)=>state.k)

    
    return (
        <div>
      {(todo.filter(e=>k===2? e:(e.isDone===k? e:null))).map(e=>(<Edit e={e}/>  ))}
        </div>
    )
}

export default Edittask
