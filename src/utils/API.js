import axios from "axios";
const URL = "https://mhauthority-api.herokuapp.com"

const API = {
    getAllAccounts: ()=>{
        return axios.get(`${URL}/api/accounts`)
    },
    getAccountByID: (userID)=>{
        return axios.get(`${URL}/api/accounts/${userID}`)
    },
    createAccount : (accountToMake)=>{
        return axios.post(`${URL}/api/accounts`,accountToMake);
    }
}

export default API;