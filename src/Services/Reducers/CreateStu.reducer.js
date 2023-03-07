import { CREATE_STU, DELETE_STU, GET_INFO, LOADING, UPDATE_STU } from "../Constants/Action.type";

const initialState = {
    studentList: [],
    studentInfo: {},
    isLoading: true
}

const CreateStuReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_STU:
            return {
                ...state,
                studentList: [
                    ...state.studentList,
                    action.payload
                ],
                isLoading: false
            }
            break;
        case LOADING:
            return {
                ...state,
                isLoading: true
            }
            break;
        case DELETE_STU:
            const dStu = state.studentList.filter((stu) => stu.id !== action.payload);
            return {
                ...state,
                studentList: dStu
            }
            break;
        case GET_INFO:
            const getInfo = state.studentList.filter((stu) => stu.id == action.payload);
            return {
                ...state,
                studentInfo: getInfo[0]
            }
            break;
        case UPDATE_STU:
            const updateData = state.studentList.map((stu) => {
                console.log(stu, "stu");
                if (stu.id == action.payload.id) {
                    return action.payload
                }
                return stu;
            })

            return {
                ...state,
                studentList: updateData
            }
            break;
        default:
            return state;
    }

}

export default CreateStuReducer;