import styled from "styled-components";

export const Container = styled.div`
     display: flex;
     align-items: flex-start;
     justify-content: space-between;

`

export const Left = styled.div`
     width: 500px;
     height: 500px;
     display: flex;
     align-items: center;
     justify-content: space-around;

     margin: 10px 40px;

`

export const Right = styled.div`
     width: 500px;
     height: 600px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;

`

export const InfoItens = styled.div`
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content: center;

     margin: 20px 30px;

`

export const InfoTitle = styled.h2`
     font-size: 20px;
     color: #FFF;

`

export const InfoLinks = styled.a`
     text-decoration: none;
     font-size: 20px;
     color: #FFFFF8;
     
     margin: 15px 0;

     &:hover{
        text-decoration: underline;
     }

`

export const InfoMainTitle = styled.h1`
     font-size: 45px;
     color: #FFF;
     margin: 60px 0;
     

`

export const StoreIcon = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;

`

export const StoreText = styled.span`
     width: 150px;
     height: 50px;
     display: flex;
     align-items: center;
     justify-content: center;

     background-color: #FFF;
     border-radius: 20px;
     padding: 8px;
     margin: 15px 10px;
     cursor: pointer;


`

export const IconImg = styled.img`
     width: 40px;
     height: 40px;   


`