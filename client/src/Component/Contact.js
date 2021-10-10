import { StyleInput, Form, FormButton } from "./styles/FormStyling"
import { SideBar, StyledBody, Breadcrums, MainContent, Block } from "./styles/StyledBody"
import { useState } from 'react'


function Contact(){
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    return(
        <StyledBody>
            <SideBar>
                <Breadcrums>
                    <li><a href="/">Homepage</a></li>
                    <li><a href="contact" className="active">Contact Us</a></li>
                </Breadcrums>
                <h2>Contacts Us</h2>
            </SideBar>
            <MainContent>
                <Block style={{transform: "translateX(-27%)"}}>
                    <Form>
                        <StyleInput>
                            <label>
                                <p>Name</p>
                                <input 
                                type='text'
                                value={ name }
                                onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            {/* <p className="error">{ error.email }</p> */}
                        </StyleInput>
                        <StyleInput>
                            <label>
                                <p>Email</p>
                                <input 
                                type='email'
                                value={ email }
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                            {/* <p className="error">{ error.email }</p> */}
                        </StyleInput>
                        <StyleInput>
                            <label>
                                <p>Message</p>
                                <textarea 
                                type='text'
                                value={ message }
                                onChange={(e) => setMessage(e.target.value)}
                                cols="100%" rows="10"
                                ></textarea>
                            </label>
                            {/* <p className="error">{ error.email }</p> */}
                        </StyleInput>
                        <FormButton>
                            <button>Submit</button>
                        </FormButton>
                    </Form>
                </Block>
            </MainContent>
        </StyledBody>
    )
}

export default Contact