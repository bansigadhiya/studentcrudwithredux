import { CREATE_STU } from "../Constants/Action.type";

const initialState = {
    studentList : []
}

const CreateStuReducer = (state = initialState,action) => {

    switch(action.type){
        case CREATE_STU : 

        break;
        default : 
            return state;
    }
    
}

export default CreateStuReducer;