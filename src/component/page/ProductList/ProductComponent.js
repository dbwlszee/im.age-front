import React from "react";
import { useState } from "react";
import styled from "styled-components";

//style
const Product = styled.div`
    display: flex;
    justify-content: right;
    
    font-size: 14px;
`;

const ProductList = styled.div`
    margin: 2.8vw 4vw 0vw 5vw;
    flex: 1;

    table{
        width:100%;
        border-collapse: collapse;
    }

    th{
        border-bottom: 1px solid #75A970;
        padding: 12px;
    }

    td{
        border-bottom: 0.3px solid #D9D9D9;
        padding: 12px;
        text-align: center;
    }
`;
const ProductDetails = styled.div`
    position: sticky;
    top: 55px;
    background-color: #f8f8f8;
    width: 28vw;
    //100vh에서 nav의 height, ProductDetails의 padding top/bottom을 빼준 값
    height: calc(100vh - 55px - 30px * 2);
    padding: 30px 3vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

    // 클릭시 상세정보가 밖에서 안으로 들어오도록
    margin-right: -34vw;
    &.active {
        margin-right: 0;
        transition: 0.8s;
    }

    div{
        height: 30px;
        font-size: 20px;
        color: #22661C;
        font-weight: 400;
        padding-bottom: 10px;
    }

    table{
        width:100%;
        border-collapse: collapse;
    }

    tbody{
        border-top: 0.3px solid #D9D9D9;
    }

    th{
        padding-top: 15px;
        font-weight: 400;
        color: #878787;
        text-align: left;
    }

    td{
        padding-top: 15px;
        width: 20vw;
        text-align: left;
    }
`;


//ProductComponent
const ProductComponent = () => {
    const [productList, setProductList] = useState({
        product:[
            {
                product_no: 1,
                category_no: 1,
                product_name: '코카콜라제로',
                product_amount: 2,
                product_in_date: '2021-02-02',
                product_price: 1234,
                product_out_month: 31,
                product_out_total: 2343,
                product_out_date: '2021-01-30',
            },
            {
                product_no: 2,
                category_no: 1,
                product_name: '웰치스제로',
                product_amount: 2,
                product_in_date: '2021-02-02',
                product_price: 1234,
                product_out_month: 31,
                product_out_total: 2343,
                product_out_date: '2021-01-30',
            },
            {
                product_no: 3,
                category_no: 1,
                product_name: '아침햇살',
                product_amount: 2,
                product_in_date: '2021-02-02',
                product_price: 1234,
                product_out_month: 31,
                product_out_total: 2343,
                product_out_date: '2021-01-30',
            },
        ]
    });

    // 상세정보를 보기 위해 상품을 클릭했는지 확인하는 변수
    const [detailOpen, setDetailOpen] = useState(false)

    // 클릭한 product의 상세정보를 저장
    const [productDetail, setProductDetail] = useState({
            product_no: '',
            category_no: '',
            product_name: '',
            product_amount: '',
            product_in_date: '',
            product_price: '',
            product_out_month: '',
            product_out_total: '',
            product_out_date: '',
    })

    const showDetail = (productID, categoryNo) => {
        setDetailOpen(detailOpen => true)
        const selectedProduct = productList.product.filter( product => product.product_no === productID)[0]
        setProductDetail(selectedProduct)
    }


    return(
        <Product>
            <ProductList>
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>상품분류</th>
                            <th>상품명</th>
                            <th>판매량(달)</th>
                            <th>재고량</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productList.product.map( product=>(
                                <tr 
                                    key={product.product_no + product.category_no}
                                    onClick={()=>showDetail(product.product_no, product.category_no)}
                                >
                                    <td>{product.product_no}</td>
                                    <td>{product.category_no}</td>
                                    <td>{product.product_name}</td>
                                    <td>{product.product_out_month}</td>
                                    <td>{product.product_amount}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </ProductList>
            <ProductDetails className={detailOpen ? "active" : ''}>
                <div>{productDetail.product_name}</div>
                <table>
                    <tbody>
                        <tr>
                            <th>제품번호</th>
                            <td>{productDetail.product_no}</td>
                        </tr>
                        <tr>
                            <th>카테고리</th>
                            <td>{productDetail.category_no}</td>
                        </tr>
                        <tr>
                            <th>제품명</th>
                            <td>{productDetail.product_name}</td>
                        </tr>
                        <tr>
                            <th>재고량</th>
                            <td>{productDetail.product_amount}</td>
                        </tr>
                        <tr>
                            <th>납품날짜</th>
                            <td>{productDetail.product_in_date}</td>
                        </tr>
                        <tr>
                            <th>제품가격</th>
                            <td>{productDetail.product_price}</td>
                        </tr>
                        <tr>
                            <th>이달판매량</th>
                            <td>{productDetail.product_out_month}</td>
                        </tr>
                        <tr>
                            <th>전체판매량</th>
                            <td>{productDetail.product_out_total}</td>
                        </tr>
                        <tr>
                            <th>최근판매</th>
                            <td>{productDetail.product_out_date}</td>
                        </tr>
                    </tbody>
                </table>
            </ProductDetails>
        </Product>
    )
}

export default ProductComponent;