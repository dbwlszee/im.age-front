import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const ProductInput = styled.div`
    width: 30vw;
    height: 35px;

    input{
        width: 100%;
        height:100%;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 9px;
    }

    input:focus {outline: none;}
    input:placeholder {color: #F8F8F8}
`;

const SearchBox = () => {
    const [productData, setProductData] = useState(); //조회 결과 저장
    const [searchKeyword, setSearchKeyword] = useState(""); //검색어
    
    const onSubmitSearch = (e) => {
        if (e.key === "Enter") {
            //동작
            console.log("it works!")
        }
    }


    return(
        <ProductInput>
            <input 
                type="search" 
                placeholder="상품을 검색하세요." 
                onChange={setSearchKeyword}
                onKeyDown={onSubmitSearch}/>
        </ProductInput>
    )
}

export default SearchBox;