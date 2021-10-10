import styled  from "styled-components";

export const StyledCategories = styled.div`
    width: 100%;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;

    ul {
        list-style: none;
    }

    ul > li {
        display: inline-block;
        margin-right: 15px;
    }

    ul > li > a {
        display: flex;
        gap: 10px;
        text-decoration: none;
        color: black;
        padding: 10px 15px;
    }

    > a {
        display: none;
        background-color: #d72691;
        padding: 6px 10px;
        width: 50%;
        border-radius: 5px;
        margin: 30px auto;
        color: white;
        text-decoration: none;
        text-align: center;
    }
    @media screen and (max-width: 830px){
            display: block;
            width: 100%;
            position: absolute;
            top: 70;
            left: 0;
            overflow-y: hidden;
            padding: 30px 20px;
            background-color: var(--white);
            justify-content: flex-start;
            flex-flow: row;
            margin-bottom: 50px;
            z-index: 10;
            transition: all 0.5s ease;

            ul li{
                display: block;
                padding: 10px 20px;
                margin-bottom: 20px;
                border-radius: 25px;
            }
            ul{
                width: 100%;
            }
            ul li a {
                text-decoration: none;
                font-weight: bold;
                color: var(--main_color);
                padding: 0;
            }
            ul li:hover{
                background-color: var(--add);
                color: var(--footer_color);
            }
            ul li a:hover{
                border-bottom: none;
                background-color: transparent;
            }
            ul li:nth-child(6),
            ul li:last-child{
                display: block;
            }
            a{
                display: block;
            }
    }
`

export const StyledMenu = styled.ul`
    list-style-type: none;
    height: 100%;
    width: 100%;
    padding: 30px 0;
    border-right: 1px solid #f0f0f0;

    li{
        padding: 10px 20px;
        margin-bottom: 10px;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
    }

    li a{
        text-decoration: none;
        color: black;
        display: flex;
        gap: 10px;
        align-items: center;    
    }

    li a.active{
        color: var(--main_color);
    }

    li:hover{
        background-color: var(--add);
    }
    li:hover a{
        color: var(--footer_color);
    }
`