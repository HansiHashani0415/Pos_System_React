import axios from "../axios";
import qs from "qs";

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

    saveProduct = async (product) => {
        const promise = new Promise((resolve, reject) => {
            axios.post("products", qs.stringify(product)).then((resp) => {
                return resolve(resp);
            }).catch((error) => {
                return resolve(error);
            })
        })
        return await promise;
    }

    updateProduct = async (product) => {
        const config = {headers: {'Content-Type': 'application/json'}}
        const promise = new Promise((resolve, reject) => {
            axios.put("products", JSON.stringify(product), config).then((resp) => {
                return resolve(resp);
            }).catch((error) => {
                return resolve(error);
            })
        })
        return await promise;
    }

    deleteProduct = async (id) => {
        const config = {headers: {'Content-Type': 'application/json'}}
        const promise = new Promise((resolve, reject) => {
            axios.delete("products/"+id,).then((resp) => {
                return resolve(resp);
            }).catch((error) => {
                return resolve(error);
            })
        })
        return await promise;
    }

    searchProduct = async (path) => {
        const promise = new Promise((resolve, reject) => {
            axios.get("products/" + path,).then((resp) => {
                console.log(resp)
                return resolve(resp);
            }).catch((error) => {
                return resolve(error);
            })
        })
        return await promise;
    }

}

export default new ProductService();