import { CREATE_STU, DELETE_STU, GET_INFO, UPDATE_STU } from "../Constants/Action.type"

export const CreateStuAction = (data) => {

    return{
        type : CREATE_STU,
        payload : data
    }
}

export const DeleteStuAction = (id) => {

    return{
        type : DELETE_STU,
        payload : id
    }
}

export const GetInfoAction = (id) => {

    return{
        type : GET_INFO,
        payload : id
    }
}

export const UpdateStuAction = (data) => {
    console.log(data,"updatedata");
    return{
        type : UPDATE_STU,
        payload : data
    }
}