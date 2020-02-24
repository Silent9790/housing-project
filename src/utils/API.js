import axios from "axios";
const URL = "http://localhost:8080"

const API = {
    getAllAccounts: ()=>{
        return axios.get(`${URL}/api/accounts`)
    },
    createAccount : (accountToMake)=>{
        return axios.post(`${URL}/api/accounts`,accountToMake);
    }
}

export default API;