import styled from "styled-components";

export const ContentContainer= styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: top;
    padding: 0 30px;
    Height: 1800px;
    position: relative;
    margin-top: -80px;
   

    /* :before {

    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg, 
        rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.6) 100%
        ),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
    }
    */

   
`;

export const ContentBox = styled.div`

 position: absolute;
 padding: 8px 24px;
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-top: 80px;
`;

export const ContentH1= styled.p`
    color:#fff; 
    font-size: 24px;
    text-align: center;
    margin-top: 40px;
    margin-left: 40px;
    margin-right: 40px ;
    line-height: calc(1ex / 0.4);

    text-align: justify;
    text-justify: auto;

    ::first-letter {
        color: #fff;
        padding: 0 .3rem;
        margin: 0 .3rem 0 0;
        font-size: 4rem;
        float: left;
        line-height: 1;
    }


    @media screen and (max-width: 768px){
        font-size: 32px;
        margin-left: 1px;
        margin-right: 1px;
        
    }
    @media screen and (max-width: 480px){
        
        font-size: 20px;
        margin-left: 1px;
        margin-right: 1px;
        text-align: justify;
        text-justify: auto;

    }
`;



export const ImgWrap = styled.div`
    margin-top: 10px;
    max-width: 555px;
    height: 100%;
    z-index:10;

`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding: 0;

`;

export const Heads= styled.h1`
    color:#fff; 
    text-align: center;
    margin-top: 80px;
    margin-left: 40px;
    margin-right: 40px ;

    text-align: justify;
    text-justify: auto;
    margin-bottom: 24px;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 800;
`;

export const About= styled.p`
    color:#fff; 
    text-align: center;
    margin-top: 8px;
    margin-left: 4px;
    margin-right: 4px ;
    display: flex;
    margin-bottom: 8px;

    text-align: justify;
    text-justify: auto;
    margin-bottom: 4px;
    font-size: 20px;

`;

export const AboutP= styled.p`
    color:#fff; 
    text-align: center;
    margin-top: 8px;
    margin-left: 40px;
    margin-right: 40px;
    display: flex;

    text-align: justify;
    text-justify: auto;
    margin-bottom: 4px;
    font-size: 17 px;
    padding-bottom: 10px;
    border-bottom: 4px dotted white;

    ::first-word{
        color: red;
    }

    @media screen and (max-width: 768px){
        font-size: 16px;
        margin-left: 1px;
        margin-right: 1px;
        
    }

    @media screen and (max-width: 480px){
        
        font-size: 16px;
        margin-left: 1px;
        margin-right: 1px;
        text-align: justify;
        text-justify: auto;
    }
 

`;