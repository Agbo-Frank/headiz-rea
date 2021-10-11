import styled from "styled-components";

export const Form = styled.form`
    padding: 20px;

`
export const UploadForm = styled.form`
    display: flex;
    justify-content: center;
    flex-flow: column;
    background-color: transparent;
    margin: 5px auto;
    width: 70%;
    background-color: var(--white) !important;
    padding: 9px;
    border: 1px #f0f0f0 solid;
    border-radius: 5px;
    outline: none;

   > div:first-child{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 23px;
        background-color: var(--white);
        margin: 20px auto;
        border-radius: 10px;
        width: 100%;
    }
    > div:first-child > div{
        width: 100%;
    }
`
export const DropZone = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
    text-align: center;
    width: 100%;
    background-color: #f0f0f0;
    padding: 10px 0 25px 0;
    border-radius: 10px;
    border: dashed 2px grey;

    input{
        display: none;
    }

    .drop-over{
        border: solid 2px grey;
    }

    > .drop-prompt > img{
        width: 80px;
        height: auto;
        display: block;
        margin: 10px auto;
    }

    .drop-zone-thumb > img{
        display: block;
        background-color: grey;
        margin: 3px auto;
        width: 150px;
        height: auto;
        object-fit: cover;
        object-position: center;
        border-radius: 10px;
    }
` 
export const DropZoneD = styled.div`
    background-color: white;
    border: 1px dashed grey;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 50%;

    > img{
        display: block;
        background-color: grey;
        margin: 3px auto;
        width: 70%;
        height: auto;
        object-fit: cover;
        object-position: center;
        border-radius: 10px;
    }

    > .drop-prompt > img{
        width: 70px;
        height: auto;
        display: block;
        margin: 10px auto;
    }
    label{
        color: var(--main_color);
        font-weight: bolder;
    }

    input{
        display: none;
    }
`

export const InputGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 30px;

    div{
        flex: 50%;
    }

    @media screen and (max-width: 830px){
        width: 100%;
        flex-flow: column;
        gap: 0;
        
        > div{
            flex: 100%;
        }
    }
`

export const StyleInput = styled.div`
    margin-bottom: 25px;

    label p{
        margin-left: 10px;
        font: 14px;
    }
    label p span{
        color: red;
    }
    input, select{
        width: 100%;
        background-color: #f0f0f0;
        padding: 9px;
        border: 1px #f0f0f0 solid;
        border-radius: 5px;
        outline: none;
    }
    .input-group{
        display: flex;
        width: 100%;
        gap: 30px;
    }

    p.error{
        font-size: 12px;
        margin-left: 10px;
        color: #e74c3c;
        text-transform: capitalize;
    }
    textarea{
    width: 100%;
    background-color: #f0f0f0;
    padding: 9px;
    border: 1px #f0f0f0 solid;
    border-radius: 5px;
    outline: none;
    margin-bottom: 30px;
    resize: none;
}
`
export const StyleInputD = styled.div`
    margin-bottom: 25px;

    label p{
        margin-left: 10px;
        font: 14px;
    }
    label p span{
        color: red;
    }
    input, select{
        width: 100%;
        background-color: white;
        padding: 9px;
        border: 1px #f0f0f0 solid;
        border-radius: 5px;
        outline: none;
    }
    .input-group{
        display: flex;
        width: 100%;
        gap: 30px;
    }

    p.error{
        font-size: 12px;
        margin-left: 10px;
        color: #e74c3c;
        text-transform: capitalize;
    }
    textarea{
        width: 100%;
        background-color: white;
        padding: 9px;
        border: 1px #f0f0f0 solid;
        border-radius: 5px;
        outline: none;
        margin-bottom: 30px;
        resize: none;
`
export const PasswordInput = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 10px;

    > div:first-child{
        display: flex;
        width: 100%;
        background-color: #f0f0f0;
        padding: 0 10px;
        border: 1px #f0f0f0 solid;
        justify-content: space-between;
        border-radius: 5px;
        outline: none;
    }
    > div:first-child >  div{
        align-self: center;
        text-align: right
    }
    > div:last-child {
        display: flex;
        justify-content: space-between;
    }
   > div:last-child a{
        float: right;
        font-size: 14px;
        text-decoration: none;
        color: #d72691;
        font-weight: bolder;
    }

`
export const FormButton = styled.div`
    text-align: center;
    font-size: 14px;
    margin: 10px auto;

    label{
        display: block;
        margin: 5px auto;
        text-align: center;
    }
    label span{ color: red}
    label input{
        display: none
    }
    button{
        display: block;
        width: 80%;
        text-align: center;
        color: white;
        background-color: #cf5ca2;
        padding: 8px 10px;
        border: none;
        border-radius: 4px;
        margin: 10px auto;
    }
    button:hover{
        background-color: var(--Hcolor);
    }
    a {
        color: #d72691;
        font-weight: bold;
        text-decoration: none;
    }
`

export const VSearch = styled.div`
    border: grey 1px solid;
    border-radius: 8px;
    padding: 7px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    width: 220px;
    margin-left: auto;

    input{
        background-color: transparent;
        border: none;
        outline: none;
    }
    +a{
        display: flex;
        justify-content: center;
        text-decoration: none;
        border-radius: 8px;
        align-items: center;
        color: white;
        background-color: var(--main_color);
        padding: 7px 20px;
        margin: 0 10px;
        gap: 20px;
    }
`