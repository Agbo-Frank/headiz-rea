import { BsFillStarFill, BsStarHalf } from "react-icons/bs";
import { Form } from './styles/FormStyling'
import { Price } from './styles/StyledBody';
import { useEffect, useState } from 'react';
import Header from './Header';
import Categories from './Categories';
import { useParams } from "react-router-dom"
import { useHistory } from "react-router"
import {Image} from 'cloudinary-react';
import { getItem, getProduct } from '../redux/action/productAction'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/action/cartAction'
import { loadUser } from "../redux/action/userAction"
import Carousel from "./Carousel"

function Product(){
    var [showCategory, setShowCategory] = useState('none')
    var dispatch = useDispatch()
    var history = useHistory()

    var { id } = useParams()

    useEffect(() => {
        dispatch(getProduct())
        dispatch(getItem(id))
    }, [dispatch])
    var item = useSelector(state => state.product.item)
    var items = useSelector(state => state.product.items)
    var user = useSelector(state => state.user.user)
    var loading = useSelector(state => state.product.loading)

    const [quantity, setQuantity] = useState()

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
            <Header user={user} displayCategories={handleClick}/>
            <Categories display={showCategory} user={user}/>
       { 
            loading ? 
            <div>Loading...</div> :
            <>
                <div className="productDetails">
                    <div>
                        <Image cloudName="agbofrank" publicId={item.file_id}/>
                    </div>
                <div>
                    <h2>{item.name}</h2>
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
                        <span><h3><s>$40,000</s></h3></span>
                        <span><h3>${item.price}</h3></span>
                    </Price>
                    <Form className="priceControl">
                        <input
                        type="number" 
                        placeholder="Quanlity"
                        value={ quantity }
                        onChange={(e) => setQuantity(e.target.value)}/>
                        <button onClick={() => {
                            user ? 
                            dispatch(addToCart(item._id, item.price, item.category, quantity, item.file_id, item.name)) :
                            history.push('/login')
                        }}>Add to Cart</button>
                    </Form>
                </div>
            </div>
            <div className="products">
                <div className="text">
                    <strong>Hair Care Products</strong>
                    <p>View All &rarr;</p>
                </div>
                <Carousel items={items} user={user}/>
            </div>
            </>
             }
    </>
    )
}

export default Product