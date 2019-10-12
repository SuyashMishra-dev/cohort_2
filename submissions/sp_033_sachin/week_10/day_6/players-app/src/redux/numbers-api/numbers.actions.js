import numbersActionType from "./numbers.types";
import axios from "axios";
export const fetchRequest = () => ({
    type : numbersActionType.FETCH_REQUEST
})

export const fetchSuccess = (data) => ({
    type : numbersActionType.FETCH_SUCCESS,
    payload : data
})

export const fetchFailure = (err) => ({
    type : numbersActionType.FETCH_FAILURE,
    payload : err
})

export const fetchApi = (totalScore) => {

    return dispatch => {
        dispatch(fetchRequest());
        return axios.get('http://numbersapi.com/'+totalScore)
                    .then(res=>{
                        console.log(res)

                        return dispatch(fetchSuccess(res.data))
                    })
                    .catch(err=>{
                        console.log(err)
                        return dispatch(fetchFailure(err))
                    })
    }
}