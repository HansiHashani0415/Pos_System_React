import axios from "../axios";

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
}export default new UserService();