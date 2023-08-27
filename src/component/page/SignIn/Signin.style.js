import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Paper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white; 
    padding: 64px 72px;
    width: 20vw;
    border-radius: 10px;
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.03);
    color: #75A970;

    h1{
        font-size: 30px;
        font-weight: 20px;
        padding-bottom: 30px;
    }

    input{
        margin: 0 0 20px 0;
        padding: 15px 5px;
        border: none;
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }
    
    button {
        display: inline-block;
        width: 100%;
        margin-top: 36px;
        border: 2px solid #75A970;
        background: #75A970;
        border-radius: 12px;
        padding: 8px 12px;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        transition: all 0.2s ease-out;
        :hover {
          color: #75A970;
          background: #fff;
          border: 2px solid #75A970;
        }
        :active {
          box-shadow: none;
        }
    }

    a{
      text-align: right;
      margin-top: 12px;
      padding: 5px 0;
      display: block;
      color: rgba(0, 0, 0, 0.4);
      -webkit-transition: all 0.1s ease-out;
      transition: all 0.1s ease-out;
      &:hover {
        -webkit-transition: all 0s ease-out;
        transition: all 0s ease-out;
        color: rgba(0,0,0,0.8);
        text-decoration: none;
      }

    }
`;