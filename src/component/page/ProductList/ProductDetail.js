import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as CloseSvg } from '../../../img/close.svg';
import { ReactComponent as EditSvg } from '../../../img/edit.svg';
import ApiService from "../../../ApiService";

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

    input{
        padding: 2.5px 0px 2.5px 6px;
    }
`;

const ProductDetail = ({ className, onClose, productDetail }) => {

    const [editMode, setEditMode] = useState(false);
    const [newProduct, setNewProduct] = useState({
        productId: productDetail.productId,
        category : productDetail.category,
        categoryKey: productDetail.categoryKey,
        createdDate: productDetail.createdDate,
        name: productDetail.name,
        outCurrent: productDetail.outCurrent,
        imageUrl: productDetail.imageUrl,
        amount: productDetail.amount,
        lastInDate: productDetail.lastInDate,
        price: productDetail.price,
        outMonth: productDetail.outMonth,
        outTotal: productDetail.outTotal,
        lastSaleDate: productDetail.lastSaleDate,
    });

    const onChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name] : e.target.value
        });
    }

    const handleEditMode = (postProduct) => {
        ApiService.searchProductsByID(postProduct)
            .then( res => {
                alert('수정되었습니다.');
                setEditMode(false);
            })
            .catch(err => {
                setEditMode(false);
                console.log('put Product Error.', err);
            })
    };

    return (
        <ProductDetails className={className} >
            <CloseSvg 
                style={{ float: 'right', display: 'block' }} 
                onClick={onClose}
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
                    onClick={()=>setEditMode(true)}
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
                        <td>
                            {!editMode?(
                                productDetail.category
                            ):(
                                <input
                                    name="category"
                                    type="text"
                                    placeholder={productDetail.category}
                                    value={newProduct.category}
                                    onChange={onChange}
                                />
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>제품명</th>
                        <td>
                            {!editMode?(
                                productDetail.name
                            ):(
                                <input
                                    name="name"
                                    type="text"
                                    placeholder={productDetail.name}
                                    value={newProduct.name}
                                    onChange={onChange}
                                />
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>재고량</th>
                        <td>{productDetail.amount}</td>
                    </tr>
                    <tr>
                        <th>제품가격</th>
                        <td>
                            {!editMode?(
                                productDetail.price
                            ):(
                                <input
                                    name="price"
                                    type="number"
                                    placeholder={productDetail.price}
                                    value={newProduct.price}
                                    onChange={onChange}
                                />
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>최근판매량</th>
                        <td>{productDetail.outCurrent}</td>
                    </tr>
                    <tr>
                        <th>최근판매</th>
                        <td>{productDetail.lastSaleDate}</td>
                    </tr>
                    <tr>
                        <th>판매량(월)</th>
                        <td>{productDetail.outMonth}</td>
                    </tr>
                    <tr>
                        <th>판매량(총)</th>
                        <td>{productDetail.outTotal}</td>
                    </tr>
                </tbody>
            </table>
            {editMode && <button onClick={handleEditMode(newProduct)}>수정</button>}
        </ProductDetails>
    )
}

export default ProductDetail;