import { BsFillStarFill, BsStarHalf } from "react-icons/bs";
import { Form } from './styles/FormStyling'
import { Price } from './styles/StyledBody';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import {Image} from 'cloudinary-react';
import { getItem } from '../redux/action/productAction'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/action/cartAction'

function Product(){

    var dispatch = useDispatch()

    var { id } = useParams()

    useEffect(() => {
        dispatch(getItem(id))
    })
    var item = useSelector(state => state.product.item)

    const [quantity, setQuantity] = useState()

    return(
        <div className="productDetails">
        <div>
        <Image cloudName="agbofrank" publicId={item.file_id}/>
        </div>
        <div>
            <h4>{item.name}</h4>
            <p>
                Raw super waves human hair that you can wear for more than 10 years.
                The promise of the collection is Quality and nothing less than Quality.
                We have put in so much effort to source the best quaility raw hair that 
                is 100% tangle free, doesn't shed and always silky even after numerous washes.
            </p>
            <div className="stars">
                <BsFillStarFill style = {{
                    color: "#afabab",
                    cursor: "pointer",
                    fontSize: "16px"
                }} />
                <BsFillStarFill style = {{
                    color: "#afabab",
                    cursor: "pointer",
                    fontSize: "16px"
                }} />
                <BsFillStarFill style = {{
                    color: "#afabab",
                    cursor: "pointer",
                    fontSize: "16px"
                }} />
                <BsFillStarFill style = {{
                    color: "#afabab",
                    cursor: "pointer",
                    fontSize: "16px"
                }} />
                <BsStarHalf style= {{
                    color: "#afabab",
                    cursor: "pointer",
                    fontSize: "16px"
                }} />
            </div>    
            <Price style={{width: "100px"}}>
                <span><s>$40,000</s></span>
                <span>${item.price}</span>
            </Price>
            <Form className="priceControl">
                <input
                 type="number" 
                 placeholder="Quanlity"
                 value={ quantity }
                 onChange={(e) => setQuantity(e.target.value)}/>
                <button onClick={() => dispatch(addToCart(item._id, item.price, item.category, quantity, item.file_id, item.name))}>Add to Cart</button>
            </Form>
        </div>
    </div>
    )
}

export default Product