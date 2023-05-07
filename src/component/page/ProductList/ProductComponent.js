import React from "react";
import { useState } from "react";
import styled from "styled-components";

//style

const Product = styled.div`
    margin: 2.8vw 5vw;
    font-size: 14px;

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
                product_name: '코카콜라제로',
                product_amount: 2,
                product_in_date: '2021-02-02',
                product_price: 1234,
                product_out_month: 31,
                product_out_total: 2343,
                product_out_date: '2021-01-30',
            },
        ]
    });


    return(
        <Product>
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
                            <tr key={product.product_no + product.category_no}>
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
        </Product>
    )
}

export default ProductComponent;