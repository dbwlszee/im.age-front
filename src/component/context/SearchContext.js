import React, { createContext, useState } from "react";

// 검색키워드 전역변수
export const SearchContext = createContext();
export const SearchProvider = ({ children }) => {
    const [searchData, setSearchData] = useState();
    const [onSearch, setOnSearch] = useState(false);

    return (
        <SearchContext.Provider 
            value={{ searchData, setSearchData, onSearch, setOnSearch }}
        >
            {children}
        </SearchContext.Provider>
    )
}