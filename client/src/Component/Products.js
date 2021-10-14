import Categories from './Categories';
import Header from './Header';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { useParams } from "react-router-dom"
import { loadUser } from "../redux/action/userAction"
import { getProduct } from "../redux/action/productAction"
import { Price } from "./styles/StyledBody"
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { addToSavedItem, removefromSavedItem } from '../redux/action/savedItemAction'
import { addToCart } from '../redux/action/cartAction'
import {Image} from 'cloudinary-react';

function Item({ items, user }){
    var dispatch = useDispatch()
    var quantity = 1
    var history = useHistory()
    return(
        <>
            {
                items.map(item => (
                    <div className="card"  key={item._id}>
                        <div>
                            <span>
                                {
                                user ? user.savedItems.includes( item._id ) ? 
                                <BsHeartFill onClick={() => dispatch(removefromSavedItem(item._id))}/> : <BsHeart onClick={() => dispatch(addToSavedItem(item._id))}/> : 
                                <BsHeart/>
                                }
                            </span>
                            <Image cloudName="agbofrank" publicId={item.file_id} onClick={() => history.push(`/product/${item._id}`)}/>
                            <a onClick={() => dispatch(addToCart(item._id, item.price, item.category, quantity, item.file_id, item.name))} className="a">Add To Cart</a>
                            </div>
                            <div>
                            <small>{item.description}</small>
                            <Price>
                                <span><s>${item.price}</s></span>
                                <span>${item.price}</span>
                            </Price> 
                        </div>
                    </div>
                ))
            }
        </>
    )
}
export default function Products(){
    var { category } = useParams()

    var [showCategory, setShowCategory] = useState('none')

    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])

    var dispatch = useDispatch()
    
    var user = useSelector(state => state.user.user)
    

    var dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    var items = useSelector(state => state.product.items)
    var loading = useSelector(state => state.product.loading)
    var categories = items.filter(item => item.category === category)

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
            {
                loading ? 
                <div>Loading...</div>:
                <div className="cards">
                    <Item items={ categories } user={ user } />
                </div>
            }
        </>    
    )
}
