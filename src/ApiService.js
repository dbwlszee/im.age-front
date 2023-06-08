import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:9090/api/product";

class ApiService {
    fetchProducts(){
        return axios.get(PRODUCT_API_BASE_URL);
    }

    fetchProductsByID(productID) {
        return axios.get(PRODUCT_API_BASE_URL + '/' + productID);
    }
}

export default new ApiService();