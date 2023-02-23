import { CREATE_STU, DELETE_STU } from "../Constants/Action.type"

const CreateStuAction = (data) => {

    return{
        type : CREATE_STU,
        payload : data
    }
}

const DeleteStuAction = (id) => {

    return{
        type : DELETE_STU,
        payload : id
    }
}


export { DeleteStuAction };
export default CreateStuAction;