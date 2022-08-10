import axios from "../axios";
import qs from "qs";

class UserService {

    fetchUsers = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get("users").then((resp) => {
                console.log(resp)
                return resolve(resp);
            }).catch((error) => {
                return resolve(error);
            })
        })
        return await promise;
    }

    saveUser=async (user)=>{
        const promise=new Promise((resolve,reject)=>{
            axios.post("users",qs.stringify(user)).then((resp)=>{
                return resolve(resp);
            }).catch((error)=>{
                return resolve(error);
            })
        })
        return await promise;
    }

    updateUser=async (user)=>{
        const config={headers:{'Content-Type':'application/json'}}
        const promise=new Promise((resolve,reject)=>{
            axios.put("users",JSON.stringify(user),config).then((resp)=>{
                return resolve(resp);
            }).catch((error)=>{
                return resolve(error);
            })
        })
        return await promise;
    }

    deleteUser=async (userID)=>{
        const config={headers:{'Content-Type':'application/json'}}
        const promise=new Promise((resolve,reject)=>{
            axios.delete("users"+userID).then((resp)=>{
                return resolve(resp);
            }).catch((error)=>{
                return resolve(error);
            })
        })
        return await promise;
    }

    searchUser=async (path)=>{
        const promise=new Promise((resolve,reject)=>{
            axios.get("users/"+path,).then((resp)=>{
                console.log(resp)
                return resolve(resp);
            }).catch((error)=>{
                return resolve(error);
            })
        })
        return await promise;
    }

}export default new UserService();