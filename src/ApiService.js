import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:9090/api";

class ApiService {
    // 전체 Product리스트
    fetchProducts(){
        return axios.get(PRODUCT_API_BASE_URL + "/product");
    }

    // 제품 상세정보
    fetchProductsByID(productID) {
        return axios.get(PRODUCT_API_BASE_URL + '/' + productID + '/detail');
    }
}

export default new ApiService();