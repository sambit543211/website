import styled from "styled-components";
import { Link } from "react-router-dom";

export const SuchiContainer= styled.div`
    background: #0c0c0c;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: top;
    padding: 0 30px;
    Height: 1800px;
    position: relative;
    margin-top: -80px;

`;

export const SuchiHeading= styled.div`
    color:#fff;
    font-size: 48px;
    text-align: center;
    margin-top: 200px;
    margin-bottom: 40px;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }

`;
export const SuchiP=styled.p`
    text-align: center;
    margin-top: 10px;
    /* text-align: justify; */
    margin-left: 10px;
    margin-right: 10px;
    


`;

export const SuchiList= styled(Link)`
    margin-top: 25px;
    color: #01BF71;
    font-size: 24px;
    /* text-align: center; */
    margin-left: 10px;
    margin-right: 10px;
    /* text-align: justify; */
    text-justify: auto;
    margin-bottom: 24px;
    line-height: 1.1;
    font-weight: 200;
    text-decoration: none;
    

`;