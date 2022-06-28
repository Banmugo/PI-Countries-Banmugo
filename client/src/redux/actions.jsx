import axios from 'axios';

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_SEARCH_NAME = 'GET_SEARCH_NAME';
export const GET_DETAIL = 'GET_DETAIL';
export const POST_ACTIVITY = 'POST_ACTIVITY';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY';
export const GET_ORDER_ALF = 'GET_ORDER_ALF';
export const GET_CANTD_POBLATION = 'GET_CANTD_POBLATION';
export const GET_PAGE = 'GET_PAGE';

export const getAllContries = () => {
    return async (dispatch) => {
        const result = await axios('http://localhost:3001/countries')
        return dispatch({
            type : GET_ALL_COUNTRIES,
            payload: result.data
        })        
    }
};

export const getSearchName = (name) => {
    return  (dispatch) => {
        try {
            return axios.get(`http://localhost:3001/countries?name=${name}`)
            .then(r => dispatch({type: GET_SEARCH_NAME, payload: r.data
            }))            
        } catch (error) {
            console.log(error);            
        }
    }
};

export const getDetail = (id) => {
    return (dispatch)=>{
        try {
            return fetch(`http://localhost:3001/countries/${id}`)
            .then(r => r.json())
            .then(r => {
                dispatch({type: GET_DETAIL, payload: r.data})
            })            
        } catch (error) {
            console.log(error);
        }
    }
};

export const postActivity = (payload)=>{
    return async (dispatch) => {
        try {
           const result = await axios.post('http://localhost:3001/activities', payload)
           return dispatch({type: POST_ACTIVITY, payload:result})              
        } catch (error) {
            console.log(error)
        }
    }
};

export const filterContinent = (payload)=>{
    return { type : FILTER_BY_CONTINENT, payload }
};

export const filterActivity = (payload)=>{
    return { type : FILTER_BY_ACTIVITY, payload }
};

export const getOrderAlf = (payload)=>{
    return { type : GET_ORDER_ALF, payload }
};

export const getcantPobl = (payload)=>{
    return { type : GET_CANTD_POBLATION, payload }
};

export const getPage = (payload)=>{
    return { type : GET_PAGE, payload }
};





