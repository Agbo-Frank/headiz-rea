import styled from "styled-components";

export const StyledBody = styled.div`
    display: flex;
    flex-flow: row;
    height: fit-content;
    width: 100%;
    justify-content: space-evenly;

    @media screen and (max-width: 830px){
        flex-flow: column;
        
    }    
`
export const StyledBodyD = styled.div`
    display: flex;
    flex-flow: row;
    height: fit-content;
    width: 100%;
    background-color: #f0f0f0;
    justify-content: space-evenly;
`

export const SideBar = styled.div`
    flex: 25%;
    height: 100%;
    padding: 20px 0 0 30px;
    background-color: white;


    h2{
        display: inline-block;
        padding: 4px 50px 4px 2px;
        border-bottom: 1px solid #f0f0f0;
        text-transform: capitalize;
        font-size: 20px;
    }

    @media screen and (max-width: 830px){
        .side-bar{
            padding: 20px;
        }
    }  
`
export const SideBarD = styled.div`
    flex: 25%;
    height: 100vh;
    padding: 20px 0 0 30px;
    margin-left: 20px;
    background-color: white;


    h2{
        display: inline-block;
        padding: 4px 50px 4px 2px;
        border-bottom: 1px solid #f0f0f0;
    }
`
export const Breadcrums = styled.ul`
    margin-bottom: 30px;
    list-style-type: none;

    li{
        display: inline-block;
    }

    li::after{
        content: " /";
    }

    li:last-child::after{
        content: "";

        a{
            color: #d72691;
        }
    }
    li a{
        text-decoration: none;
        color: black;
        font-size: 14px;
    }
    li:last-child a{
        color: #d72691;
    }
`
export const MainContent = styled.div`
    flex: 75%;
    padding: 40px 20px;

    .dcards{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
        grid-gap: 20px 55px;
        margin-top: 60px;
    }
    .dcard{
        padding: 15px;
        background-color: var(--white);
        text-align: center;
        box-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);
        color: #979393;
        transition: all 0.2s ease-in;
    }
    .dcard a{
        text-decoration: none;
        color: #979393;
    }
    .dcard:hover{
        background-color: var(--main_color);
        color: var(--white);
    }
    .dcard:hover > a{
        color: var(--white);
    }
`

export const Block = styled.div`
    margin: 30px auto;
    padding: 20px;
    text-align: center;
    width: 70%;
    img {
        display: block;
        width: 300px;
        height: auto;
        object-fit: contain;
        margin: 20px auto;
    }
    label + p,
    label{
        text-align: left;
    }

    @media screen and (max-width: 830px){
        width: 97%
    }
`
export const Table = styled.table`
    background-color: white;
    padding: 20px;
    margin: 20px auto;
    width: 100%;
    text-align: left; 

    thead{
        border-bottom: 1px solid var(--main_color);
    }

    td, th{
        padding: 4px 7px;
    }

    > tbody > tr td:first-child > img{
        width: 90px;
        height: 90px;
        object-fit: contain;

    }
    tr > td:last-child span:hover{
        color: var(--main_color);
    }

    @media screen and (max-width: 830px){
        display: none;
    } 
`

export const Price = styled.div`
    margin-bottom: 10px;
    display: flex;
    gap: 10px;
    justify-content: space-between;

    > span:first-child{
        color: var(--main_color);
    }
`