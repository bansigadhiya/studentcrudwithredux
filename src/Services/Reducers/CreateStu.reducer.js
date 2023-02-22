import { CREATE_STU } from "../Constants/Action.type";

const initialState = {
    studentList : []
}

const CreateStuReducer = (state = initialState,action) => {

    console.log("data",action.payload);
    switch(action.type){
        case CREATE_STU : 
            return{
                ...state,
                studentList : [
                    ...state.studentList,
                    action.payload
                ]
            }
        
        break;
        default : 
            return state;
    }
    
}

export default CreateStuReducer;