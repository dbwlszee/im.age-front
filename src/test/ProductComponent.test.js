// springboot에서 데이터를 제대로 받아오는지 테스트
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductComponent from '../component/page/ProductList/ProductComponent';


test('renders data correctly', () => {
  // Mock 데이터 설정
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

  // MyComponent를 렌더링하고 Mock 데이터를 프롭스로 전달
  render(<ProductComponent productData={mockData} />);

  // 데이터가 제대로 렌더링되는지 확인
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('2')).toBeInTheDocument();
});