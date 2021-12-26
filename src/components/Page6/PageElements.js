import styled from "styled-components";

export const ContentContainer= styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: top;
    padding: 0 30px;
    Height: 2100px;
    position: relative;
    margin-top: -80px;

    @media screen and (max-width: 480px){
        
        height: 3200px;

    }
    
   

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
 margin-left: 100px;
 margin-right: 100px;
 
 @media screen and (max-width: 480px){
        
        
        margin-left: 1px;
        margin-right: 1px;
 }

`;

export const Row=styled.div`

    &:after{
        content: "";
        display: table;
        clear: both;
    }


`;

export const ContentH1= styled.p`
    color:#fff; 
    font-size: 25px;
    text-align: center;
    margin-top: 40px;
    margin-left: 50px;
    margin-right: 5px ;
    line-height: calc(1ex / 0.4);

    text-align: justify;
    /* text-justify: auto; */
    line-height: 1.3;
    text-justify: distribute;
    word-spacing:-2px;
    width: 44%;
    float: left;
    white-space: pre-wrap;
   
  

    ::first-letter {
        color: #fff;
        padding: 0 .3rem;
        margin: 0 .3rem 0 0;
        font-size: 4rem;
        float: left;
        line-height: 1;
    }


    @media screen and (max-width: 768px){
        font-size: 22px;
        margin-left: 1px;
        margin-right: 1px;
        width: 100%;
        
    }
    @media screen and (max-width: 480px){
        
        font-size: 19px;
        margin-left: 1px;
        margin-right: 1px;
        text-align: left;
        text-justify: distribute;
        word-spacing:-1px;
        display: inline-block;
        width: 100%;
        line-height: calc(1ex / 0.33);      

    }
`;




export const ContentH2= styled.p`
    color:#fff; 
    font-size: 25px;
    text-align: center;
    margin-top: 40px;
    margin-left: 5px;
    margin-right: 50px ;
    line-height: calc(1ex / 0.4);

    text-align: justify;
    text-justify: auto;
    line-height: 1.4;
    text-justify: distribute;
    word-spacing:-2px;
    width: 44%;
    float: right;
    

    @media screen and (max-width: 768px){
        font-size: 22px;
        margin-left: 1px;
        margin-right: 1px;
        width: 100%;
        
    }
    @media screen and (max-width: 480px){
        
        font-size: 19px;
        margin-left: 1px;
        margin-right: 1px;
        text-align: left;
        text-justify: distribute; 
        word-spacing:-1px;
        width: 100%;
        line-height: calc(1ex / 0.33);
    

    }
`;



export const ImgWrap = styled.div`
    margin-top: 10px;
    max-width: 555px;
    height: 100%;
    z-index:10;
    align-items: center;
    justify-content: center;

`;

export const Img = styled.img`
    width: 80%;
    margin: 0 0 10px 30px;
    padding: 0;
    height: 100%;
    align-items: center;
    display: block;

`;

export const Heads= styled.h1`
    color:#fff; 
    text-align: center;
    margin-top: 100px;
    margin-left: 40px;
    margin-right: 40px ;

    text-align: justify;
    text-justify: auto;
    margin-bottom: 24px;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 800;

    @media screen and (max-width: 480px){
        
        font-size: 26px;
        

    }

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
    font-size: 18 px;
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
