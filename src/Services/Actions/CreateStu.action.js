import { CREATE_STU } from "../Constants/Action.type"

const CreateStuAction = (data) => {
    return{
        type : CREATE_STU,
        payload : data
    }
}

export default CreateStuAction;