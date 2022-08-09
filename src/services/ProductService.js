import axios from "../axios";

class ProductService {

    fetchProducts = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get("products").then((resp) => {
                console.log(resp)
                return resolve(resp);
            }).catch((error) => {
                return resolve(error);
            })
        })
        return await promise;
    }

    fetchProductCategories = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get("products/categories").then((resp) => {
                console.log(resp)
                return resolve(resp);
            }).catch((error) => {
                return resolve(error);
            })
        })
        return await promise;
    }

}export default new ProductService();