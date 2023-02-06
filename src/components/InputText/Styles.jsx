import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 470px;

`

export const Line = styled.hr`
    border: 5px solid #6C3B91;
    border-radius: 20px;
    width: 120px;
    

`

export const MainTitle = styled.h1`
    font-size: 40px;
    color: #FFF;

    margin: 30px 0;

`

export const Text = styled.span`
     font-size: 20px;
     color: #E9F7FF;

`

export const FormCreate = styled.form`
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content: center;

     margin: 30px 0;

`

export const InputField = styled.input`
     width: 400px;
     height: 40px;
     margin: 8px 0;
     background-color: #1E192C;
     border: none;
     
     font-size: 20px;
     color: #FFF;

     ::placeholder{
        color: #FFF;
     }
     

`

export const InputLine = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;     


`

export const ButtonForm = styled.button`
    width: 400px;
    height: 50px;
    border-radius: 20px;
    font-size: 20px;
    padding: 10px;
    margin: 30px 20px;
    background-color: #565656;
    color: #FFF;
    border: none;
    cursor: pointer;

    transition: all 0.3s ease;

    &:hover{
        background-color: #6C3B91;
    }

`

export const ImgIcon = styled.img`
     width: 30px;
     height: 30px;
     margin: 0 10px;
     object-fit: cover;
     background-color: #6C3B91;     

`

export const Advertisement = styled.span`
     font-size: 18px;
     color: #E9F7FF;
     margin 20px 0;

`

export const AdvertisementLink = styled.a`
     color: #7F41A4;
     text-decoration: none;

     &:hover{
        text-decoration: underline;
     }

`

export const GoToLogin = styled.span`
     margin: 40px 0;

     font-size: 18px;
     color: #E9F7FF;

`

export const LoginLink = styled.a`
     font-size: 18px;
     color: #1FC47A;
     text-decoration: none;

     &:hover{
        text-decoration: underline;
     }

`