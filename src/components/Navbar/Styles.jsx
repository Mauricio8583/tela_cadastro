import styled from "styled-components";

export const Container = styled.div`
    height: 70px;
    width: 100%;
    background-color: #151515;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    z-index: 999;

`

export const Logo = styled.div`
     height: 80%;
     width: 140px;
     position: relative;
     margin-left: 9px;
     padding: 5px;
     overflow-y: hidden;

`

export const LogoImg = styled.img`
     height: 55px;
     width: 100%;

`

export const Menu = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;

`

export const ListaMenu = styled.ul`
     display: flex;
     align-items: center;
     justify-content: center;

     list-style: none;

`

export const ListaMenuItem = styled.li`
     color: #FFF;
     font-size: 22px;
     margin: 12px;
     cursor: pointer;

     transition: all 0.3s ease;
     
     &:hover{
        color: #D71154;
     }

`

export const Buttons = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;



`

export const ButtonOption = styled.button`
     width: 150px;
     height: 35px;
     margin: 5px 10px;
     font-size: 24px;
     border-radius: 20px;
     border: none;
     padding: 10px;
     background-color: #565656;
     color: #FFF;
     cursor: pointer;
     overflow-y: hidden;

     transition: all 0.3s ease;

     display: flex;
     align-items: center;
     justify-content: center;

     &:hover{
        background-color: #E4105D;
     }

`

export const Flags = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`

export const ImgFlag = styled.img`
    height: 40px;
    width: 40px;
    margin: 7px;
    border-radius: 50%;
    object-fit: cover;
    filter: grayscale(100%);
    cursor: pointer;

    transition: all 0.3s ease;

    &:hover{
        filter: grayscale(0);
    }

`

