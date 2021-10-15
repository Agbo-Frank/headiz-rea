import { StyledBody, SideBar, Breadcrums, MainContent} from './styles/StyledBody'
import Menu from './Menu'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useHistory } from "react-router"
import { getOrder } from '../redux/action/orderAction'
import { Image } from 'cloudinary-react';

function Order(){
    var dispatch = useDispatch()
    var history = useHistory()

    useEffect(() => {
        dispatch(getOrder(history))
    }, [dispatch, history])

    var orders = useSelector(state => state.order.items)

    function display(date){
        var d = new Date(date)
        var dateArr = d.toUTCString().split(' ')
        var newDate  = `${dateArr[1]} ${dateArr[2]} ${dateArr[3]}`
        return newDate
    }

    function displayId(id){
        var i = id.slice(0, 8)
        return `${i}...`
      }
    return(
        <StyledBody>
            <SideBar>
                <Breadcrums>
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="account" class="active">Order</Link></li>
                </Breadcrums>
                <h2>Orders</h2>
                <Menu view='user' active='order'/>
            </SideBar>
            <MainContent>
            <div class="saved-items">
                {
                    orders.map(order => (
                        <div class="order-item" key = { order._id}>
                            <div>
                            <Image cloudName="agbofrank" publicId={order.file_id}/>
                                <div class="text">
                                <strong>{ order.name }</strong><br/>
                                <small>order no: {displayId(order._id)}</small>
                                <div>
                                    <p>${ order.price }</p>
                                    <p>{ display(order.date) }</p>
                                </div>
                                </div>
                            </div>
                            <div>
                                <p><strong>Payment Successful</strong></p>
                            </div>
                        </div>
                    ))
                }
            </div>
            </MainContent>
        </StyledBody>
    )
}

export default Order