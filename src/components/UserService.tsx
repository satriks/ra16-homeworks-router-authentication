import axios from "axios"




export default class UserService {

    static getToken = async (name : string, password : string) => {

        

        const res = await axios.post("http://localhost:7070/auth", {login: name, password: password})
        

        if (res.status >= 400 && res.status <= 500) {
            return null
        }
        
        if (res.status >= 200 && res.status <= 300) { localStorage.setItem("token", res.data.token)}

        return res.data.token


    }

    static getInfo = async (token : string | null) => {
        
        if (token) {
            try {
                const res = await axios.get("http://localhost:7070/private/me", {headers: { Authorization: `Bearer ${token}` }})
                
                return res
            } catch (err) {
                throw new Error("");
                
            }
            
        }
        return {data: null}

    }

    static getData = async (token : string | null) => {

        if (token) {
            try{
                const res = await axios.get("http://localhost:7070/private/news", {headers: { Authorization: `Bearer ${token}` }})
                
                return res
            }
            catch(err){
                throw new Error("");
             }
            }
        
        return {data: []}
    }
} 