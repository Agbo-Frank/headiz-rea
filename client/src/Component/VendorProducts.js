import { MainContent, SideBarD, StyledBodyD, Table } from "./styles/StyledBody"
import Menu from "./Menu"
import { useEffect } from "react";
import { Link, useHistory } from 'react-router-dom'
import { VSearch } from "./styles/FormStyling";
import { useDispatch, useSelector } from "react-redux"
import { BsSearch, BsPlus, BsPencil, BsTrash } from "react-icons/bs";
import { getVendorProduct } from '../redux/action/productAction'
import {Image} from 'cloudinary-react';


function VendorProducts(){
    var dispatch = useDispatch()
    var history = useHistory()
    var items = useSelector(state => state.product.items)
    var user = useSelector(state => state.user)

    
    useEffect(() => {
        dispatch(getVendorProduct())
    }, [dispatch])
    return(
        <StyledBodyD>
            <SideBarD>
                <Menu active='Product' view='vendor'/>
            </SideBarD>
            <MainContent>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h3>All Products{user.firstName}</h3>
                    <div style={{display: "flex"}}>
                        <VSearch>
                            <BsSearch style={{color: "grey"}}/>
                            <input type="search" placeholder='Search by Name...' />
                        </VSearch>
                        <Link to="Upload">
                            <BsPlus style={{fontSize: "30px"}}/>  
                            <p>Add Item</p>
                        </Link>
                    </div>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th>item ID</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Availabilty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => (
                                <tr key={item._id}>
                                    <td><Image cloudName="agbofrank" publicId={item.file_id}/></td>
                                    <td>{item.name}</td>
                                    <td>{item._id}</td>
                                    <td>{item.category}</td>
                                    <td>{item.price}</td>
                                    <td>{item.availability ? 'in stock' : 'out of stock'}</td>
                                    <td><span><BsPencil onClick={() => history.push(`/editupload/${item._id}`)}/></span><span><BsTrash/></span></td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </Table>
            </MainContent>    
        </StyledBodyD>    
    )
}

export default VendorProducts