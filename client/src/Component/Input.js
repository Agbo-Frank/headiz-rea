import { StyleInput, PasswordInput } from "./styles/FormStyling"
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useState } from "react";

function Input({ label, type, name}){
    [showPw, setShowPw] = useState(true)
    const [showPw, setShowPw] = useState(true)
    const [pw, setPw] = useState('password')

    const showPassword = (e) => {
        if(pw === 'password'){
            setPw('text')
            setShowPw(false)
        }
        else{
            setPw('password')
            setShowPw(true)
        }
    } 
    return(
        <StyleInput>
            <label>
                <p>{ label }</p>
                {type === 'password' ?
                 <PasswordInput>
                    <div>
                        <input type={ pw } />
                        <div onClick={(e) => showPassword(e)}>{showPw ? <MdVisibility style={{color: "grey"}}/>: <MdVisibilityOff style={{color: "grey"}}/>}</div>
                    </div>
                    <div>
                        <div className="error pw"></div>
                        <a>Forget Password</a>
                    </div>
                </PasswordInput>: 
                <input type={ type }/>}
            </label>
        </StyleInput>
    )
}

export default Input