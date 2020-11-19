import {ADD_TASK,CHANGEK, EDITCHECK,EDITNAME} from "../actiontype/actiontype"


const initialState={
    todoTask:[],
    k:0,
    int:0,

}

const reducer=(state=initialState,action)=>
{   switch(action.type)
    {
        case ADD_TASK: 
        return{...state,todoTask:[...state.todoTask,action.payload],int:state.int+1};


        case CHANGEK: 
        let t; 
        switch (action.payload)
        {
            case 0: t=1;break;
            case 1: t=2;break;
            case 2: t=0;break;
            default :t=0;
        }
        return {...state,k:t}


        case EDITCHECK:
            //we send the ID
           
            return {...state,todoTask:[...state.todoTask.map(e=>e.id===action.payload?{...e,isDone:action.payload.isDone}:e)]}
        
        case EDITNAME:
            //we send the ID
           
            return {...state,todoTask:[...state.todoTask.map(e=>e.id===action.payload?{...e,name:action.payload.name}:e)]}
        default :return state;
    }
    

};

export default reducer;