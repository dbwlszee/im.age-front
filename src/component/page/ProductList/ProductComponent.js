import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as CloseSvg } from '../../../img/close.svg';
import { ReactComponent as EditSvg } from '../../../img/edit.svg';

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

    &.inactive {
        margin-right: -34vw;
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
const ProductComponent = ({productData}) => {
    // const [image, setImage] = useState([]);

    // 상세정보를 보기 위해 상품을 클릭했는지 확인하는 변수
    const [detailOpen, setDetailOpen] = useState(false)

    // 클릭한 product의 상세정보를 저장
    const [productDetail, setProductDetail] = useState({
        productId: '',
        category : '',
        categoryKey: '',
        createdDate: '',
        name: '',
        currentAmount: '',
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

    
    // useEffect(() => {
    //     // flask에서 이미지 url 받아오기

    //     fetch('http://localhost:5000/api/images')
    //       .then(response => response.json())
    //       .then(data => {
    //         setImage(data.image);
    //         console.log(image);
    //       });
    //   }, []);


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
                            // 리스트가 존재할 때 productList를 화면에 뿌려준다.
                            productData && productData.map( product=>(
                                <tr 
                                    key={product.productId}
                                    onClick={()=>showDetail(product.productId)}
                                >
                                    <td>{product.productId}</td>
                                    <td>{product.categoryKey}</td>
                                    <td>{product.name}</td>
                                    <td>{product.outMonth}</td>
                                    <td>{product.currentAmount}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </ProductList>
            <ProductDetails className={detailOpen ? "active" : "inactive"}>

                <CloseSvg 
                    style={{ float: 'right', display: 'block' }} 
                    onClick={()=>setDetailOpen(detailOpen => false)}
                />

                {   productDetail.imageUrl && 
                    <img 
                        src={productDetail.imageUrl}
                        style={{height: '200px', marginBottom: '20px'}}
                        alt={productDetail.name}
                    />
                }
                <div>{productDetail.name}
                    <EditSvg 
                        style={{ 
                            position: 'relative' ,
                            top: '2',
                            left: '5'
                        }} 
                    />
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>제품번호</th>
                            <td>{productDetail.productId}</td>
                        </tr>
                        <tr>
                            <th>카테고리</th>
                            <td>{productDetail.category}</td>
                        </tr>
                        <tr>
                            <th>제품명</th>
                            <td>{productDetail.name}</td>
                        </tr>
                        <tr>
                            <th>재고량</th>
                            <td>{productDetail.currentAmount}</td>
                        </tr>
                        <tr>
                            <th>납품날짜</th>
                            <td>{productDetail.lastInDate}</td>
                        </tr>
                        <tr>
                            <th>제품가격</th>
                            <td>{productDetail.price}</td>
                        </tr>
                        <tr>
                            <th>이달판매량</th>
                            <td>{productDetail.outMonth}</td>
                        </tr>
                        <tr>
                            <th>전체판매량</th>
                            <td>{productDetail.outTotal}</td>
                        </tr>
                        <tr>
                            <th>최근판매</th>
                            <td>{productDetail.lastSaleDate}</td>
                        </tr>
                    </tbody>
                </table>
            </ProductDetails>
        </Product>
    )
}

export default ProductComponent;