import { MainContent } from "./styles/StyledBody"
import { StyleInput,InputGroup, StyleInputD, FormButton, Form, } from "./styles/FormStyling"
import { useState, useEffect } from 'react'
import Categories from './Categories';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux'
import { MdRadioButtonChecked, MdRadioButtonUnchecked, MdCheckBox, } from "react-icons/md"
import { loadUser } from "../redux/action/userAction"
import visa from '../img/visaa.png'
import verve from '../img/Verve-Logo-750x396.png'
import master from '../img/master card.png'
import interswitch from '../img/interswitch.png'
import { createOrder } from '../redux/action/orderAction'
import { useHistory } from "react-router";


function Billing(){
    const [fname, setFname] = useState('');  const [address, setAddress] = useState('')
    const [town, setTown] = useState('');    const [email, setEmail] = useState('');
    const [state, setState] = useState('');  const [pnumber, setPnumber] = useState('');
    const [lname, setLname] = useState('');  const [payByCard, setPayByCard] = useState(false);
    const [cardno, setCardNo] = useState('');  const [cvv, setCvv] = useState(''); 
    const [expiryDate, setExpiryDate] = useState(''); 

    var dispatch = useDispatch()
    var history = useHistory()

    var price = useSelector(state => state.user.totalBill)
    var user = useSelector(state => state.user.user)

    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])

    function submitForm(e){
        e.preventDefault()

        var doc = {
            fname, town, state, lname, email, cardno, cvv, payByCard,
            pnumber, address, expiryDate, price  
        }

        dispatch(createOrder(doc, history))

        setFname('')
        setTown('')
        setState('')
        setLname('')
        setCardNo('')
        setExpiryDate('')
        setAddress('')
        setEmail('')
        setPnumber('')
        setPayByCard(false)
        setCvv('')

    }
    var [showCategory, setShowCategory] = useState('none')
    function handleClick(){
        if(showCategory === 'none'){
            setShowCategory('block')
        }
        else(
            setShowCategory('none')
        )
    }
    return(
        <>
            <Header displayCategories={handleClick} user={user}/>
            <Categories display={showCategory} user={user}/>
            <MainContent >
                <Form className='billing' onSubmit={(e) => submitForm(e)}>
                    <div className="billingDetalis">
                            <h3>BILLING DETAILS</h3>
                        <div>   
                            <InputGroup>
                            <StyleInput>
                                <label>
                                    <p>First Name<span>*</span></p>
                                    <input 
                                    type='text'
                                    value={ fname }
                                    onChange={e => setFname(e.target.value)}/>
                                </label>
                            </StyleInput>
                            <StyleInput>
                                <label>
                                    <p>Last Name<span>*</span></p>
                                    <input 
                                    type='text'
                                    value={ lname }
                                    onChange={e => setLname(e.target.value)}/>
                                </label>
                            </StyleInput>
                    </InputGroup>
                    <StyleInput>
                            <label>
                            <p>Address<span>*</span></p>
                                <input 
                                type='text'
                                value={ address }
                                onChange={e => setAddress(e.target.value)}/>
                            </label>
                        </StyleInput>
                        <StyleInput>
                            <label>
                            <p>Town/City<span>*</span></p>
                                <input 
                                type='text'
                                value={ town }
                                onChange={e => setTown(e.target.value)}/>
                            </label>
                        </StyleInput>
                        <StyleInput>
                            <label>
                            <p>State<span>*</span></p>
                                <input 
                                type='text'
                                value={ state }
                                onChange={e => setState(e.target.value)}/>
                            </label>
                        </StyleInput>
                        <StyleInput>
                            <label>
                            <p>Phone Number<span>*</span></p>
                                <input 
                                type='text'
                                value={ pnumber }
                                onChange={e => setPnumber(e.target.value)}/>
                            </label>
                        </StyleInput>
                    </div>
                    </div>
                    <div className="orderDetails" style={{flex: "50%"}}>
                        <h3>YOUR DETAILS</h3>
                    <div>
                        <div className="orderCard">
                            <p>
                                <span>Subtotal</span>
                                <span>${ price }.00</span>
                            </p>
                            <p>
                                NOTE: international orders, shipping cost is calculated differently.
                                shipping options will be updated during checkout. 
                                delivery fee is not included yet.
                                <p>Delievery Cost Applies</p>
                                <p>
                                    <span>Subtotal</span>
                                    <span>${ price }.00</span>
                                </p>
                            </p> 
                            
                            <p>
                                <strong>TOTAL</strong>
                                <span>${ price }.00</span>
                            </p>
                        </div>

                    <div className="options">
                        <div className="pay-field">
                        <input 
                        type="radio" 
                        id="pay"/>
                        <label htmlFor="pay" onClick={(e) => setPayByCard(false)}>{!payByCard ? <MdRadioButtonChecked style={{color: "#d72691"}}/> : <MdRadioButtonUnchecked style={{color: "#d72691"}}/>} Pay on Delievery</label>
                        <div>
                            <small>
                                Payment on Delievery will cost an extra charges. it takes 3-4 days to arrive
                            </small>
                        </div>
                        </div>
                        <div className="pay-field">
                        <input 
                        type="radio" 
                        id="pay"/>
                        <label htmlFor="pay" onClick={(e) => setPayByCard(true)}>{payByCard ? <MdRadioButtonChecked style={{color: "#d72691"}}/> : <MdRadioButtonUnchecked style={{color: "#d72691"}}/>} Card payment</label>
                        <span className="payment">
                            <img src={verve} alt="visa"/>
                            <img src={master} alt="visa"/>
                            <img src={visa} alt="visa"/>
                            <img src={interswitch} alt="visa"/>
                        </span>
                        <div>
                            <small>
                                Card Payment processes by verse, MasterCard, visa and interswitch
                            </small>
                        </div>
                        </div>
                        {payByCard && <div>
                            <StyleInputD>
                                    <label>
                                    <p>Card number</p>
                                        <input 
                                        type='number'
                                        value={ cardno }
                                        onChange={e => setCardNo(e.target.value)}/>
                                    </label>
                                </StyleInputD>
                                <StyleInputD>
                                    <label>
                                    <p>Email address<span>*</span></p>
                                        <input 
                                        type='text'
                                        value={ email }
                                        onChange={e => setEmail(e.target.value)}/>
                                    </label>
                                </StyleInputD>
                                <InputGroup>
                                <StyleInputD>
                                    <label>
                                        <p>Expiry Date<span>*</span></p>
                                        <input 
                                        type='text'
                                        placeholder='01/01'
                                        value={ expiryDate }
                                        onChange={e => setExpiryDate(e.target.value)}/>
                                    </label>
                                </StyleInputD>
                                <StyleInputD>
                                    <label>
                                        <p>CVV<span>*</span></p>
                                        <input 
                                        type='text'
                                        value={ cvv }
                                        onChange={e => setCvv(e.target.value)}/>
                                    </label>
                                </StyleInputD>
                        </InputGroup>
                        </div>}
                        </div>
                        </div>
                        <FormButton style={{backgroundColor: "white"}}>
                            <label htmlFor="accept">
                                <p><MdCheckBox style={{color: "#d72691"}}/> 
                                    I have agree to the website terms and condition<span>*</span>
                                </p>
                                <input type="checkbox" id="accept" />
                            </label>
                            <button type="submit">Pay  { price }</button>
                        </FormButton>
                    </div>
                </Form>
            </MainContent>
        </>
    )
}

export default Billing