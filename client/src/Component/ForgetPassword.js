import { Block } from "./styles/StyledBody"
import { StyleInput, Form, FormButton } from './styles/FormStyling'
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { resetPassword } from '../redux/action/userAction'
import { useSelector } from 'react-redux'
import Categories from './Categories';
import Header from './Header';

function ForgetPassword(){
    const [email, setEmail] = useState('')
    var [showCategory, setShowCategory] = useState('none')

    var dispatch = useDispatch()

    function submit(e){
        e.preventDefault()
        var doc = { email }

        dispatch(resetPassword(doc))

        setEmail('')
    }
    function handleClick(){
        if(showCategory === 'none'){
            setShowCategory('block')
        }
        else(
            setShowCategory('none')
        )
    }

    var error = useSelector(state => state.error.errorMsg)
    var user = useSelector(state => state.user.user)
    return(
        <>
            <Header displayCategories={handleClick} user={user}/>
            <Categories display={showCategory} user={user}/>
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
        </>
    )
}

export default ForgetPassword