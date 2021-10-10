import { Block } from "./styles/StyledBody"
import { StyleInput, Form, FormButton } from './styles/FormStyling'
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { resetPassword } from '../redux/action/userAction'
import { useSelector } from 'react-redux'

function ForgetPassword(){
    const [email, setEmail] = useState('')

    var dispatch = useDispatch()

    function submit(e){
        e.preventDefault()
        var doc = { email }

        dispatch(resetPassword(doc))

        setEmail('')
    }
    var error = useSelector(state => state.error.errorMsg)
    return(
        <Block>
            <h3>Forgot Password?</h3>
             <small>Please enter your email address. you will receive a 
            Link via your email to create a new password</small>

            <Form onSubmit={(e) => submit(e)}>
               <StyleInput>
                    <label>
                        <p>Email Address</p>
                            <input 
                            type='text'
                            value={ email }
                            onChange={e => setEmail(e.target.value)}/>
                    </label>
                    <p className="error">{ error.email }</p>
                </StyleInput>
                <FormButton>
                    <button>Reset Password</button>
                </FormButton>
            </Form>
        </Block>
    )
}

export default ForgetPassword