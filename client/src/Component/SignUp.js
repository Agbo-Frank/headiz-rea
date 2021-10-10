import { Link } from "react-router-dom"
import { Breadcrums, MainContent, SideBar, StyledBody } from "./styles/StyledBody"
import { StyleInput,InputGroup, PasswordInput, FormButton, Form, } from "./styles/FormStyling"
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { registerUser } from '../redux/action/userAction'


function SignUp() {
    const [showPw, setShowPw] = useState(true)
    const [pw, setPw] = useState('password')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [pnumber, setPnumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    var error = useSelector(state => state.error.errorMsg)

    var dispatch = useDispatch()

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

        var doc = {
            firstName: fname,
            lastName: lname,
            phoneNumber: pnumber,
            email: email,
            password: password
        }
        dispatch(registerUser(doc))

        setEmail('')
        setLname('')
        setFname('')
        setPassword('')
        setPnumber('')

    }
    return(
        <StyledBody>
            <SideBar>
                <Breadcrums>
                    <li><a href="/">Homepage</a></li>
                    <li><a href="account" className="active">Account</a></li>
                </Breadcrums>
                <h2>Sign Up</h2>
            </SideBar>
            <MainContent>
                
               <Form className="signUp" onSubmit={(e) => submit(e)}>
                   <InputGroup>
                        <StyleInput>
                            <label>
                                <p>First Name</p>
                                <input 
                                type='text'
                                value={ fname }
                                onChange={e => setFname(e.target.value)}/>
                            </label>
                            <p class="error">{ error && error.firstName }</p>
                        </StyleInput>
                        <StyleInput>
                            <label>
                                <p>Last Name</p>
                                <input 
                                type='text'
                                value={ lname }
                                onChange={e => setLname(e.target.value)}/>
                            </label>
                            <p class="error">{error && error.lastName }</p>
                        </StyleInput>
                   </InputGroup>
                   <InputGroup>
                        <StyleInput>
                            <label>
                                <p>Phone Number</p>
                                <input 
                                type='number'
                                value={ pnumber }
                                onChange={e => setPnumber(e.target.value)}/>
                            </label>
                            <p class="error">{error && error.phoneNumber }</p>
                        </StyleInput>
                        <StyleInput>
                            <label>
                                <p>Email</p>
                                <input type='email'
                                value={ email }
                                onChange={e => setEmail(e.target.value)}/>
                            </label>
                            <p class="error">{ error && error.email }</p>
                        </StyleInput>
                   </InputGroup>
                   
                   <InputGroup>
                        <StyleInput>
                            <label>
                                <p>Password</p>
                                <PasswordInput>
                                    <div>
                                        <input 
                                        type={ pw }
                                        value={ password }
                                        onChange={e => setPassword(e.target.value)} />
                                        <div onClick={(e) => showPassword(e)}>{showPw ? <MdVisibility style={{color: "grey"}}/>: 
                                        <MdVisibilityOff style={{color: "grey"}}/>}</div>
                                    </div>
                                    <div>
                                        <div className="error pw">{error &&  error.password }</div>
                                        <a>Forget Password</a>
                                    </div>
                                </PasswordInput>
                            </label>
                        </StyleInput>
                        <StyleInput>
                            <label>
                                <p> Confirm Password</p>
                                <PasswordInput>
                                    <div>
                                        <input type="password" />
                                        <div onClick={(e) => showPassword(e)}>{showPw ? <MdVisibility style={{color: "grey"}}/>: <MdVisibilityOff style={{color: "grey"}}/>}</div>
                                    </div>
                                    <div>
                                        <div className="error">{ error && error.password }</div>
                                    </div>
                                </PasswordInput>
                            </label>
                        </StyleInput>
                   </InputGroup>
                   <FormButton>
                      <button type="submit">Sign Up</button>
                      <p>A Member? <Link to="/login">Login</Link></p>
                   </FormButton>
               </Form> 
            </MainContent>
        </StyledBody>
    )
}

export default SignUp