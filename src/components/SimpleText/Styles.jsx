import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 370px;

`

export const Line = styled.hr`
    border: 5px solid #6C3B91;
    border-radius: 20px;
    width: 120px;
    

`

export const Text = styled.h1`
     font-size: 40px;
     color: #FFF;

     margin: 30px 10px;

`

export const GoBack = styled.a`
     font-size: 20px;
     color: #7F41A4;
     text-decoration: none;

     margin-top: 25px;

     &:hover{
        text-decoration: underline;
     }

`