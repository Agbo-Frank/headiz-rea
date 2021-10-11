import Categories from './Categories';
import Header from './Header';
import { Table } from './styles/StyledBody'
import { useState, useEffect } from 'react'
import { useHistory } from "react-router"
import { useDispatch, useSelector } from 'react-redux';
import { BsTrash } from "react-icons/bs";
import { getCartItem } from '../redux/action/cartAction';
import { removeFromCart } from '../redux/action/cartAction'
import {Image} from 'cloudinary-react';

function Cart(){
    var [showCategory, setShowCategory] = useState('none')
     
    var dispatch = useDispatch()
    var history = useHistory()

    useEffect(() => {
        dispatch(getCartItem(history))
    }, [dispatch])

    var user = useSelector(state => state.user.user)
    var items = user.cart

    var totalBills = items.reduce((total, item ) => ( total + (item.price * item.quantity) ), 0)
        

    function decreament(id, e){
        if(e.target.nextElementSibling.innerHTML > 1 ){
            dispatch({type: 'DEC', payload: id})
        }
    }
    function increament(id, e){
        dispatch({type: 'INC', payload: id})
    }
    function proceed(bill){
        dispatch({type: 'UPDATE_BILL', payload: bill})
        history.push('/billing')
    }
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
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>SubTotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => (
                                <tr key={item.itemId}>
                                    <td style={{
                                        display: "flex",
                                        gap: "10px"
                                    }}>
                                        <Image cloudName="agbofrank" publicId={item.file_id} onClick={() => history.push(`/product/${item._id}`)}/>
                                        <div style={{
                                            alignSelf: "center"
                                        }}>
                                            <p><strong>{item.name}</strong></p>
                                            <p>{item.category}</p>
                                        </div>
                                    </td>
                                    <td>{item.price}</td>
                                    <td>
                                        <div className='quatityControl'>
                                            <button onClick = {(e) => decreament(item.itemId, e)}>-</button>
                                            <p>{ item.quantity }</p>
                                            <button onClick = {(e) => increament(item.itemId, e)}>+</button>
                                        </div>
                                    </td>
                                    <td className="quatity">{ item.price * item.quantity }</td>
                                    <td><BsTrash onClick = {() => dispatch(removeFromCart(item.itemId))}/></td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </Table>
                {
                    items.map(item => (
                        <div class="product-card">
                            <Image cloudName="agbofrank" publicId={item.file_id} onClick={() => history.push(`/product/${item._id}`)}/>
                            <div><p>Product:</p> <p>{item.name}</p></div>
                            <div><p>Price:</p><p>${item.price}</p></div>
                            <div><p>Quantity:</p>
                            <p className='quatityControl'>
                                <button onClick = {(e) => decreament(item.itemId, e)}>-</button>
                                <p>{ item.quantity }</p>
                                <button onClick = {(e) => increament(item.itemId, e)}>+</button>
                            </p></div>
                        </div>
                    ))
                }
                <div className="orderDetails" style={{
                    width: "50%",
                    marginLeft: "auto",
                }}>
                    <div>
                        <div className="orderCard">
                            <p>
                                <span>Subtotal</span>
                                <span> ${ totalBills }.00 </span>
                            </p>
                            <p>
                                NOTE: international orders, shipping cost is calculated differently.
                                shipping options will be updated during checkout. 
                                delivery fee is not included yet.
                                <p>Delievery Cost Applies</p>
                                <p>
                                    <span>Subtotal</span>
                                    <span>${ totalBills + 10 }.00</span>
                                </p>
                            </p> 
                            
                            <p>
                                <strong>TOTAL</strong>
                                <span>${ totalBills  + 10}.00</span>
                            </p>
                        </div>
                        <div className="pay">
                            <button onClick={() => history.push('/')}>Continue Shopping</button>
                            <button onClick={() => proceed(totalBills)}>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart