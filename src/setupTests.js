// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
//import '@testing-library/jest-dom';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Axios 인스턴스 생성
const axiosInstance = axios.create();

// Mock 인스턴스 생성
const mock = new MockAdapter(axiosInstance);

// Mock 데이터
const mockData = [{
    product_no: '1',
    category_no: '2',
    product_name: '3',
    product_amount: '4',
    product_in_date: '5',
    product_price: '6',
    product_out_month: '7',
    product_out_total: '8',
    product_out_date: '9',
}];

// Mock API 호출 설정
mock.onGet('/api/data').reply(200, mockData);