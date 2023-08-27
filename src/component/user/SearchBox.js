import React, { useContext } from "react";
import { useState } from "react";
import { SearchContext } from "../context/SearchContext";
import styled from "styled-components";
import ApiService from "../../ApiService";


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
    const { searchData, setSearchData, onSearch, setOnSearch } = useContext(SearchContext); //조회 결과 저장
    const [searchKeyword, setSearchKeyword] = useState(''); //검색어
    
    const onSubmitSearch = (e) => {
        if (e.key === "Enter") {

            {searchKeyword ? 
                ApiService.editProductsByKeyword(searchKeyword)
                .then( res => {
                    onSearch(true);
                    setSearchData(res.data);
                })
                .catch(err => {
                    console.log('reloadRequest Error.', err);
                })
                : 
                setOnSearch(false)}
            
        }
    }


    return(
        <ProductInput>
            <input 
                type="search" 
                placeholder="상품을 검색하세요." 
                onChange={(e)=>setSearchKeyword(e.target.value)}
                onKeyDown={onSubmitSearch}/>
        </ProductInput>
    )
}

export default SearchBox;