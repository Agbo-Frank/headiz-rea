import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    background: #d72691;
    padding: 10px 25px;
    width: 100%;
    gap: 20px;
    height: 60px;
    z-index: 20;

    > input[type~='checkbox']{
        display: none;
    }
    > label{
        display: none;
        align-self: center;
        cursor: pointer;
    }
    > label > .menu-bar{
        width: 25px;
    }
    > label > .menu-bar > div{
        background-color: var(--white);
        width: 100%;
        height: 3px;
        margin-bottom: 3px;
        margin-right: 10px;
        transition: all 0.5s ease;
    }
    > input:checked + label .menu-bar > div:first-child{
        transform: rotate(45deg) translate(5px, 6px);
    }
    > input:checked + label .menu-bar > div:nth-child(2){
        transform: translateX(-15px);
        opacity: 0;
    }
    > input:checked + label .menu-bar > div:last-child{
       transform: rotate(-45deg) translate(4px, -5px);
    }

    > div:last-child {
        flex: 80%;
        display: flex;
        justify-content: space-between;
    }
    @media screen and (max-width: 830px){
        z-index: 10;

        > label{
            display: inline-block;
        }
        ~ .search{
            display: flex;
        }
    }    
`
export const Logo = styled.div`
    flex: 20%;
    color: #fff;
`
export const Search = styled.div`
    background-color: #fff;
    display: flex;
    border-radius: 5px;
    padding: 5px 10px;
    align-self: center;
    
    input{
        width: 400px;
        border: none;
        outline: none;
    }

    input::placeholder{
        color: black;
    }

    @media screen and (max-width: 1050px){
        display: none;
    }
`
export const Navs = styled.ul`
    align-self: center;
    display: flex;
    gap: 40px;
    justify-content: flex-end;
    color: white;
    margin-left: auto;
    list-style-type: none; 
    
    li{
        display: inline-block;
        text-decoration: none;
        color: white;
        padding: 7px 10px;
    }

    li a{
        display: flex;
        text-decoration: none;
        color: white;
        padding: 7px 10px;
    }

    li a:not(.active):hover{
        background-color: #bb6e9f;
        border-radius: 4px;
    } 
    li a i{
        margin-right: 5px;
    }
    li a.active{
        background-color: var(--white);
        color: var(--main_color);
        padding: 5px 15px;
        border-radius: 5px;
    }

    .cart-icon{
        display: flex;
        position: relative;
    }
    .cart-icon > span:last-child{
        display: inline-block;
        position: absolute;
        width: 12px;
        height: 12px;
        color: #d72691;
        background-color: white;
        font-weight: bolder;
        border-radius: 50%;
        top: 0;
        left: 50%;
        z-index: 2;
        font-size: 9px;
        text-align: center;
        vertical-align: center;
    }
    img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        object-fit: contain;
    }

    @media screen and (max-width: 830px){
        justify-content: flex-end
        
        li:not(li:nth-child(3)){
            display: none;
        }
    }    
`
