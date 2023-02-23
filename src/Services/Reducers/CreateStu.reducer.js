import { CREATE_STU, DELETE_STU } from "../Constants/Action.type";

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
        case DELETE_STU :
            const dStu = state.studentList.filter((stu) => stu.id !== action.payload);
            return{
                ...state,
                studentList : dStu
            }
        break;
        default : 
            return state;
    }
    
}

export default CreateStuReducer;