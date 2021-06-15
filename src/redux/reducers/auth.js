import types from "../types";

const initial_state={
    userData:{}
}


export default function(state=initial_state,action){
    switch(action.type){

      
        case types.FORUMS:{
            const data=action.payload
            return{...state , userData:data }
        }
         
        


        default:{
            return {...state}
        }
    }
}