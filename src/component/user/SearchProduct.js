import React, { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import ProductComponent from "../page/ProductList/ProductComponent";
import styled from "styled-components";


const BackMain = styled.button`
    background-color: transparent;
    font-size: 16px;
    color: #75A970;
    text-decoration: underline;
`;
const CntSearch = styled.p`
    position: absolute;
    top: 96px;
    left: 5vw;
    color: #75A970;
    font-size: 16px;
`;


const SearchProduct = (productData) => {
    const { setOnSearch, onSearch } = useContext(SearchContext);

    const handleSearchChange = () => {
        setOnSearch(false);
    };

    return(
        <>
            { productData ? <ProductComponent productData={productData.productData}/>  : <p>검색 결과가 없습니다.</p>}
            <CntSearch><BackMain onClick={handleSearchChange}>Home</BackMain> / 검색결과</CntSearch>
        </>
    )
}

export default SearchProduct;