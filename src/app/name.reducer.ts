import { createReducer,on} from "@ngrx/store";
import { actionfun } from "./name.action";
let initialvalue:any=""
export const reducerfun=createReducer(initialvalue,
    on(actionfun,(state,{uname})=>uname)
)