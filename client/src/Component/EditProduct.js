import Header from './Header';
import Menu from "./Menu"
import { Form, StyleInputD, InputGroup, DropZoneD, FormButton } from "./styles/FormStyling"
import { MainContent, SideBarD, StyledBodyD } from "./styles/StyledBody"
import { useEffect, useState } from 'react'
import { loadUser } from "../redux/action/userAction"
import insertImg from '../img/insert-picture-icon.svg'
import { useDispatch, useSelector } from "react-redux"
import { editProduct, getItem } from '../redux/action/productAction'
import { useParams } from "react-router-dom"
import {Image} from 'cloudinary-react';


function EditProduct(){
    var { id } = useParams()

    var dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getItem(id))
        dispatch(loadUser())
    }, [dispatch, id])


    var item = useSelector(state => state.product.item)
    var loading = useSelector(state => state.product.loading)

    const [category, setCategory] = useState(item.category)
    const [name, setName] = useState(item.name)
    const [price, setPrice] = useState(item.price)
    const [availability, setAvailability] = useState(item.availability)
    const [ID, setID] = useState(id)
    const [desc, setDesc] = useState(item.description)
    const [file, setFile] = useState('')

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
            itemId: ID,
            description: desc,
            image: file,
            availability: availability
        }

        console.log(doc);

        dispatch(editProduct(doc))

        setName('')
        setCategory('')
        setPrice('')
        setDesc('')
        setFile('')
        setAvailability('')
        setID('')
    }
    var user = useSelector(state => state.user.user)
 
    return(
       <>
             <Header user={user}/>
             <StyledBodyD>
                <SideBarD>
                    <Menu active='Product' view='vendor'/>
                </SideBarD>
                <MainContent>
                    <h3>Edit Product</h3>
                    {
                        loading ? 
                        <div>Loading....</div> : 
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
                        <InputGroup style={{gap: "40%"}}>
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
                                    <p>Product ID</p>
                                    <input 
                                    type='text'
                                    value={ ID }
                                    onChange={e => setID(e.target.value)}/>
                                </label>
                                {/* <p class="error">{ error.lastName }</p> */}
                            </StyleInputD>
                    </InputGroup>
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
                                {file ?<Image cloudName="agbofrank" publicId={file}/>:<div className="drop-prompt">
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
                    }
                
                </MainContent>
            </StyledBodyD>
       </>
    )
}

export default EditProduct