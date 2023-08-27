import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ProductDetail from "./ProductDetail";

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


//ProductComponent
const ProductComponent = ({productData}) => {

    // 상세정보를 보기 위해 상품을 클릭했는지 확인하는 변수
    const [detailOpen, setDetailOpen] = useState(false)

    // 클릭한 product의 상세정보를 저장
    const [productDetail, setProductDetail] = useState({
        productId: '',
        category : '',
        categoryKey: '',
        createdDate: '',
        name: '',
        outCurrent: '',
        imageUrl: '',
        amount: '',
        lastInDate: '',
        price: '',
        outMonth: '',
        outTotal: '',
        lastSaleDate: '',
    })

    const showDetail = (productID) => {
        // 상세정보 보기
        setDetailOpen(detailOpen => true)
        
        // 선택한 상품을 productDetail에 저장한다.
        setProductDetail(productData.filter( product => product.productId === productID)[0])
    }

    const hideDetail = () => {
        // 상세정보 숨기기
        setDetailOpen(false);
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
                            <th>최근판매량</th>
                            <th>현재재고량</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // 리스트가 존재할 때 productList를 화면에 뿌려준다.
                            productData && productData.map( product=>(
                                <tr 
                                    key={product.productId}
                                    onClick={()=>showDetail(product.productId)}
                                >
                                    <td>{product.productId}</td>
                                    <td>{product.categoryKey}</td>
                                    <td>{product.name}</td>
                                    <td>{product.outCurrent}</td>
                                    <td>{product.amount}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </ProductList>
            <ProductDetail
                className = { detailOpen ? "active" : "inactive" }
                onClose = { hideDetail }
                productDetail = { productDetail }
            />
        </Product>
    )
}

export default ProductComponent;