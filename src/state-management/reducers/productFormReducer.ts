import { FieldValues } from "react-hook-form";

export interface productFormAction{
    type: "ENTER_VALUE" | "REMOVE_VALUE"
    data: FieldValues
}

const productFormReducer = (state: FieldValues, action: productFormAction) =>{
    if(action.type === 'ENTER_VALUE'){
            
    }
}