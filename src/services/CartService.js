import axios from "../axios";

class CartService {

    fetchCarts = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get("carts").then((resp) => {
                console.log(resp)
                return resolve(resp);
            }).catch((error) => {
                return resolve(error);
            })
        })
        return await promise;
    }
}export default new CartService();