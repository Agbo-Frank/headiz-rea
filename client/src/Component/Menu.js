import { StyledMenu } from "./styles/StyledCategories"
import { useHistory } from "react-router"
import { BsGear, BsColumnsGap, BsGift, BsBoxArrowRight } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { logout } from '../redux/action/userAction'

function Menu({ active, view }){
    var dispatch = useDispatch()
    var history = useHistory()
    return(
        <StyledMenu active={active}>
            {view === 'vendor' ?<Fragment className='vendor'> <li><Link to="VendorProducts" className={active === 'Dashboard' && 'active'}><BsColumnsGap/>Dashboard</Link></li>
            <li><Link to="VendorProducts" className={active === 'Product' && 'active'}><BsGift/>Product</Link></li>
            <li><Link to="/setting" className={active === 'setting' && 'active'}><BsGear/>Setting</Link></li>
            <li><Link className={active === 'order' && 'active'}><MdDashboard/>Orders</Link></li>
            <li><Link onClick={() => dispatch(logout(history))} className={active === 'Logout' && 'active'}><BsBoxArrowRight style={{fontSize: "20px"}}/>Logout</Link></li></Fragment> : 
            <><li><Link className={active === 'dashboard' && 'active'}>Dashboard</Link></li>
            <li><Link to="order" className={active === 'order' && 'active'}>order</Link></li>
            <li><Link to="saveditems" className={active === 'Saved item' && 'active'}>Saved item</Link></li>
            <li><Link to="cart" className={active === 'cart' && 'active'}>Cart</Link></li>
            <li><Link onClick={() => dispatch(logout(history))} className={active === 'Log Out' && 'active'}>Log Out</Link></li></>}
        </StyledMenu>
    )
}

export default Menu