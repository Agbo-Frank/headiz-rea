import { MainContent, SideBarD, StyledBodyD } from "./styles/StyledBody";
import { Form,InputGroup, StyleInputD, PasswordInput, FormButton } from "./styles/FormStyling";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Menu from "./Menu"
import { useDispatch,useSelector } from "react-redux";
import { useState } from 'react'
import Header from './Header';


function UserDetails(){
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [pnumber, setPnumber] = useState('')
    const [password, setPassword] = useState('')
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
        <Form>
            <InputGroup>
                <StyleInputD>
                    <label>
                        <p>First Name</p>
                        <input 
                        type='text'
                        value={ fname }
                        onChange={e => setFname(e.target.value)}/>
                    </label>
                </StyleInputD>
                <StyleInputD>
                    <label>
                        <p>Last Name</p>
                        <input 
                        type='text'
                        value={ lname }
                        onChange={e => setLname(e.target.value)}/>
                    </label>
                </StyleInputD>
            </InputGroup>
            <InputGroup>
                <StyleInputD>
                    <label>
                        <p>Email Address</p>
                        <input 
                        type='email'
                        value={ email }
                        onChange={e => setEmail(e.target.value)}/>
                    </label>
                </StyleInputD>
                <StyleInputD>
                    <label>
                        <p>Phone Number</p>
                        <input 
                        type='number'
                        value={ pnumber }
                        onChange={e => setPnumber(e.target.value)}/>
                    </label>
                </StyleInputD>
            </InputGroup>
            <StyleInputD>
                <label>
                    <p>Password</p>
                    <PasswordInput>
                        <div>
                            <input 
                            type={ pw } 
                            value={ password }
                            onChange={e => setPassword(e.target.value)}/>
                            <div onClick={(e) => showPassword(e)}>{showPw ? <MdVisibility style={{color: "grey"}}/>: <MdVisibilityOff style={{color: "grey"}}/>}</div>
                        </div>
                    </PasswordInput>
                </label>
            </StyleInputD>
            <FormButton style={{
                marginLeft: "auto",
                width: "50%"
            }}>
                <button type="submit">Save Chnages</button>
            </FormButton>
        </Form>
    )
}

function BuisnessDetails(){
    const [Bname, setBName] = useState('')
    const [address, setAddress] = useState('')
    const [state, setState] = useState('')
    const [year, setYear] = useState('')
    const [website, setWebsite] = useState('')
    return(
        <Form>
            <InputGroup>
                <StyleInputD>
                    <label>
                        <p>Business Name</p>
                        <input 
                        type='text'
                        value={ Bname }
                        onChange={e => setBName(e.target.value)}/>
                    </label>
                </StyleInputD>
                <StyleInputD>
                    <label>
                        <p>Address</p>
                        <input 
                        type='text'
                        value={ address }
                        onChange={e => setAddress(e.target.value)}/>
                    </label>
                </StyleInputD>
            </InputGroup>
            <InputGroup>
                <StyleInputD>
                    <label>
                        <p>State</p>
                        <input 
                        type='text'
                        value={ state }
                        onChange={e => setState(e.target.value)}/>
                    </label>
                </StyleInputD>
                <StyleInputD>
                    <label>
                        <p>Year Established</p>
                        <input 
                        type='date'
                        value={ year }
                        onChange={e => setYear(e.target.value)}/>
                    </label>
                </StyleInputD>
            </InputGroup>
            <StyleInputD>
                <label>
                    <p>Website</p>
                    <input 
                    type="text"
                    value={ website }
                    onChange={e => setWebsite(e.target.value)} />
                </label>
            </StyleInputD>
            <FormButton style={{
                marginLeft: "auto",
                width: "50%"
            }}>
                <button type="submit">Save Chnages</button>
            </FormButton>
        </Form>
    )
}

export default function Settings(){
    const [isOpen, setIsOpen] = useState(false)
    var user = useSelector(state => state.user.user)
    return(
        <>
          <Header user={user}/>
            <StyledBodyD style={{backgroundColor: "#f0f0f0"}}>
                <SideBarD style={{height: "100vh", marginLeft: "20px"}}>
                <Menu active='setting' view='vendor'/>
                </SideBarD>
                <MainContent>
                    <div className="settings">
                        <button className={!isOpen && "active"} onClick = {() => setIsOpen(false)}>User Details</button>
                        <button className={isOpen && "active"} onClick = {() => setIsOpen(true)}>Business Details</button>
                    </div>
                    {
                        isOpen ? <BuisnessDetails/> : <UserDetails/>
                    }
                </MainContent>
            </StyledBodyD>
        </>
    )
} 