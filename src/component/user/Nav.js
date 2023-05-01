import React from "react";

const Nav = () => {

    return(
        <>
            <nav>
                <div>
                    <a href="/">IM.AGE</a>
                </div>

                <ul>
                    <li><a href="/sales-status">판매 현황</a></li>
                    <li><a href="/stock">재고 확인</a></li>
                    <li><a href="/add">상품 추가</a></li>
                    <li><a href="/settings">설정</a></li>
                    <li><a href="/login">로그인</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;