import axios from 'axios';

const PRODUCT_API_BASE_URL = "https://im-age.store/api";

class ApiService {

    // 전체 Product리스트
    fetchProducts() {
        return axios.get(PRODUCT_API_BASE_URL + "/product");
    }

    // 제품 상세정보
    fetchProductsByID(productID) {
        return axios.get(PRODUCT_API_BASE_URL + '/' + productID + '/detail');
    }

    // 제품정보 수정
    searchProductsByID(productID) {
        return axios.put(PRODUCT_API_BASE_URL + '/product/' + productID);
    }

    // 제품 월별판매량
    fetchMonthlySales() {
        return axios.get(PRODUCT_API_BASE_URL + '/month');
    }

    // 제품이름 검색
    editProductsByKeyword(productKeyword) {
        return axios.get(PRODUCT_API_BASE_URL + '/search?keyword=' + productKeyword);
    }

    async call(api, method, request) {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
        };
        const url = PRODUCT_API_BASE_URL + api;

        const options = {
            method: method,
            headers: headers,
            url: url,
            data: request, // For GET method, Axios handles it automatically
        };

        try {
            const res = await axios(options);
            if (res.status === 200) {
                console.log('성공');
                return res.data;
            } else {
                throw new Error("Error");
            }
        } catch (err) {
            console.log("Axios error");
            console.log(err);
            throw err;
        }
    }

    async signin(userDTO) {
        try {
            const res = await this.call('/auth/signin', 'POST', userDTO);
            console.log("res: ", res);
            alert('login token: ' + res.token);
        } catch (error) {
            console.log("Error signing in:", error);
        }
    }

    async signup(userDTO) {
        return await this.call('/auth/signup', 'POST', userDTO);
    }

}

export default new ApiService();