import { Link } from "react-router-dom"
import { StyledCategories } from "./styles/StyledCategories"

function Categories(){
    return(
        <StyledCategories>
            <ul>
                <li><Link to="/products/hairBundle">HAIR BUNDLE</Link></li>
                <li><Link to="/products/wig">WIGS</Link></li>
                <li><Link to="/products/f/c">FRONTALS & CLOSURE</Link></li>
                <li><Link to="/products/hairCare">HAIR CARE</Link></li>
                <li><Link to="/products/beautyShop">BEAUTY SHOP</Link></li>
                <li><Link>ACCOUNT</Link></li>
            </ul>
            <Link href="#">Sell</Link>
        </StyledCategories>
        
    )
}

export default Categories