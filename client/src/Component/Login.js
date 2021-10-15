import { StyleInput, PasswordInput, FormButton, Form, } from "./styles/FormStyling"
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom"
import { Breadcrums, MainContent, SideBar, StyledBody } from "./styles/StyledBody"
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from '../redux/action/userAction'
import Categories from './Categories';
import Header from './Header';

function Login() {
    var [showCategory, setShowCategory] = useState('none')
    const [showPw, setShowPw] = useState(true)
    const [pw, setPw] = useState('password')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    var [toggleMenu, setToggleMenu] = useState('')

    var dispatch = useDispatch()
    var history = useHistory()

    var error = useSelector(state => state.error.errorMsg)
    var user = useSelector(state => state.user.user)
    
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
    function submit(e){
        e.preventDefault()
        
        var doc = { email, password }

        dispatch(loginUser(doc, history))

        setEmail('')
        setPassword('')
    }
    function handleClick(){
        if(showCategory === 'none'){
            setShowCategory('block')
            setToggleMenu(':checked')
        }
        else{
            setShowCategory('none')
            setToggleMenu('')
        }
    }
    return(
        <>
                        <Header displayCategories={handleClick} toggle={ toggleMenu } user={user}/>
            <Categories display={showCategory} displayCategories={handleClick} user={user}/>
            <StyledBody>
                <SideBar>
                    <Breadcrums>
                        <li><Link to="/">Homepage</Link></li>
                        <li><Link className="active">Account</Link></li>
                    </Breadcrums>
                    <h2>Login</h2>
                </SideBar>
                <MainContent>
                <Form className="block" onSubmit={(e) => submit(e)}>
                        <StyleInput>
                            <label>
                                <p>Email Address</p>
                                <input 
                                type='email'
                                value={ email }
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                            <p className="error">{error &&  error.email }</p>
                        </StyleInput>
                        <StyleInput>
                            <label>
                                <p>Password</p>
                                <PasswordInput>
                                    <div>
                                        <input 
                                        type={ pw }
                                        value={ password }
                                        onChange={ (e) => setPassword(e.target.value)} />
                                        <div onClick={(e) => showPassword(e)}>{showPw ? <MdVisibility style={{color: "grey"}}/>: 
                                        <MdVisibilityOff style={{color: "grey"}}/>}</div>
                                    </div>
                                    <div>
                                        <p className="error">{error &&  error.password }</p>
                                        <Link to="forgetpassword">Forget Password</Link>
                                    </div>
                                </PasswordInput>
                            </label>
                    </StyleInput>  
                    <FormButton>
                        <button type="submit">Login</button>
                        <p>Not a Member? <Link to="signup">Register</Link></p>
                    </FormButton>
                </Form> 
                </MainContent>
            </StyledBody>
        </>
    )
}

export default Login