import { StyledMenu } from "./styles/StyledCategories"
import { BsGear, BsColumnsGap, BsGift, BsBoxArrowRight } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";

function Menu({ active, view }){
    var dispatch = useDispatch()
    return(
        <StyledMenu active={active}>
            {view === 'vendor' ?<Fragment className='vendor'> <li><Link to="VendorProducts" className={active === 'Dashboard' && 'active'}><BsColumnsGap/>Dashboard</Link></li>
            <li><Link to="VendorProducts" className={active === 'Product' && 'active'}><BsGift/>Product</Link></li>
            <li><Link to="/setting" className={active === 'setting' && 'active'}><BsGear/>Setting</Link></li>
            <li><Link className={active === 'order' && 'active'}><MdDashboard/>Orders</Link></li>
            <li><Link className={active === 'Logout' && 'active'}><BsBoxArrowRight style={{fontSize: "20px"}}/>Logout</Link></li></Fragment> : 
            <><li><Link className={active === 'dashboard' && 'active'}>Dashboard</Link></li>
            <li><Link to="order" className={active === 'order' && 'active'}>order</Link></li>
            <li><Link to="saveditems" className={active === 'Saved item' && 'active'}>Saved item</Link></li>
            <li><Link to="cart" className={active === 'cart' && 'active'}>Cart</Link></li>
            <li><Link onClick={() => dispatch({type: 'LOGOUT'})} className={active === 'Log Out' && 'active'}>Log Out</Link></li></>}
        </StyledMenu>
    )
}

export default Menu