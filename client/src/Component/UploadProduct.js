import Menu from "./Menu"
import { Form, StyleInputD, DropZoneD, FormButton } from "./styles/FormStyling"
import { MainContent, SideBarD, StyledBodyD } from "./styles/StyledBody"
import { useState } from 'react'
import insertImg from '../img/insert-picture-icon.svg'
import { useDispatch } from "react-redux"
import { uploadProduct } from '../redux/action/productAction'


function UploadProduct(){
    const [category, setCategory] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [availability, setAvailability] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile] = useState('')

    var dispatch = useDispatch()

    function upload(e) {
        var reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setFile(reader.result)
        }
    }

    function submit(e) {
        e.preventDefault()

        var doc = {
            name: name,
            category: category,
            price: price,
            description: desc,
            image: file,
            availability: availability
        }

        dispatch(uploadProduct(doc))

        setName('')
        setCategory('')
        setPrice('')
        setDesc('')
        setFile('')
        setAvailability('')
    }

    
    return(
        <StyledBodyD>
            <SideBarD>
                <Menu active='Product' view='vendor'/>
            </SideBarD>
            <MainContent>
                <h3>Upload Product</h3>
                <Form style={{display: "flex", flexFlow: "row", justifyContent: "space-between", gap: "10%"}} onSubmit={(e) => submit(e)}>
                    <div style={{flex: "50%"}}>
                    <StyleInputD>
                        <label>
                            <p>Name</p>
                            <input 
                            type='text'
                            value={ name }
                            onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        {/* <p className="error">{ error.email }</p> */}
                    </StyleInputD>
                    <StyleInputD>
                            <label>
                                <p>Category</p>
                                <select 
                                value={ category }
                                placeholder="Select Category"
                                onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="hairBundle">Hair Bundle</option>
                                    <option value="wig">WIGS</option>
                                    <option value="f/c">FRONTAL AND CLOSURE</option>
                                    <option value="hairCare">HAIR CARE</option>
                                    <option value="beautyShop">BEAUTY SHOP  </option>
                                </select>
                            </label>
                    </StyleInputD>
                    <StyleInputD>
                            <label>
                                <p>Price</p>
                                <input 
                                name='price'
                                value={ price }
                                onChange={e => setPrice(e.target.value)}/>
                            </label>
                            {/* <p class="error">{ error.firstName }</p> */}
                    </StyleInputD>
                   <StyleInputD>
                            <label>
                                <p>Availability</p>
                                <select 
                                value={ availability }
                                onChange={(e) => setAvailability(e.target.value)}
                                >
                                    <option value="">Select Category</option>
                                    <option value={ true }>True</option>
                                <option value={ false }>WIGS</option>
                                </select>
                            </label>
                    </StyleInputD>
                   <StyleInputD>
                            <label>
                                <p>Description</p>
                                <textarea 
                                type='text'
                                value={ desc }
                                onChange={(e) => setDesc(e.target.value)}
                                cols="100%" rows="10"
                                ></textarea>
                            </label>
                            {/* <p className="error">{ error.email }</p> */}
                    </StyleInputD>
                    <FormButton>
                    <button type="submit">Save</button>
                    </FormButton>
                    </div>
                    <div style={{flex: "30%"}}>
                        <DropZoneD>
                            {file ?<img src={file} />:<div className="drop-prompt">
                                <img src={insertImg}/>
                                <p>Drop your image here or 
                                    <label htmlFor="myfile">
                                        browse
                                        <input type="file" name='image'  id="myfile" onChange={(e) => upload(e)}/>
                                    </label>
                                </p>
                                <small>Supports: JPG, PNG</small>
                            </div>}
                        </DropZoneD>
                    </div>
                </Form>
            </MainContent>
        </StyledBodyD>
    )
}

export default UploadProduct