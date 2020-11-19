import {ADD_TASK,CHANGEK,EDITCHECK, EDITNAME} from "../actiontype/actiontype"


export const add_task=(payload)=>{
    return{
        type:ADD_TASK,
        payload,
    }
}
export const changek=(payload)=>{
    return{
        type:CHANGEK,
        payload,
    }
}

export const editCheck=(payload)=>{
    return{
        type:EDITCHECK,
        payload,
    }
}

export const editname=(payload)=>{
    return{
        type:EDITNAME,
        payload,
    }
}