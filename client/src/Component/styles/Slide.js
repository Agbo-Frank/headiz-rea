import styled from "styled-components";

export const StyledSlide = styled.div`
    position: relative;
    width: 100%;
    height: 60vh;

    > div{
        display: block;
        width: 100%;
        height: 100%;
     }

     .slide-details{
        width: 60%;
        position: absolute;
        z-index: 2;
        height: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: linear-gradient(to right, rgba(200, 223, 220, 0.9) 80%, rgba(200, 223, 220, 0));
        padding: 0 80px;
    }
    .slide-details p,
    .slide-details h1{
        margin-bottom: 13px;
    }
    .slide-details .link{
        text-decoration: none;
        color: var(--btn);
        padding: 9px 25px;
        border: solid 1.5px var(--btn);
        background-color: transparent;
        position: relative;
        border-radius: 25px;
        z-index: 5;
    }
    .slide-details .link::before{
        content: '';
        position: absolute;
        top: 0;left: 0;
        width: 100%;
        height: 100%;
        border-radius: 26px;
        background-color: var(--btn);
        clip-path: circle(40% at 50% 50%);
        opacity: 0;
        z-index: 0;
        transition: all 0.3s linear;
    }
    .slide-details .link:hover::before{
        opacity: 0.3;
        clip-path: circle(100%);
        z-index: 0;
    }
    div > img{
        display: block;
        width: 55%;
        height: 100%;
        object-fit: fill;
        object-position: center;
        margin-left: auto;
    }

    @media screen and (max-width: 830px){
        border-radius: 15px;
        width: 80%;
        margin: 0 auto 10px;
        padding: 20px;
        height: 40vh;

        > div{
            display: block;
            width: 100%;
            height: 100%;

            h1{
                font-size: 18px;
            }
            img{
                border-radius: 15px;
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        > div >.slide-details{
            border-radius: 15px;
            width: 100%;
            height: 100%;
            display: block;
            text-align: start;
            background: transparent;
            color: whitesmoke;
            background: linear-gradient(to right, rgba(200, 223, 220, 0.6) 10%, rgba(200, 223, 220, 0));
        }
        .slide-details p{
            display: none;
        }
    }
`