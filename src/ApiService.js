import axios from 'axios';

const PRODUCT_API_BASE_URL = "/api/product";

class ApiService {
    fetchProducts(){
        return axios.get(PRODUCT_API_BASE_URL);
    }

    fetchProductsByID(productID) {
        return axios.get(PRODUCT_API_BASE_URL + '/' + productID);
    }
}

export default new ApiService();