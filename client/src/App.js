import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Billing from './Component/Billing';
import Categories from './Component/Categories';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import ForgetPassword from './Component/ForgetPassword';
import Header from './Component/Header';
import Home from './Component/Home';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import VSignUp from './Component/VSignUp';
import EditProduct from './Component/EditProduct';
import UploadProduct from './Component/UploadProduct';
import UDashBoard from './Component/UDashBoard';
import VendorProducts from './Component/VendorProducts';
import Product from './Component/Product';
import Products from './Component/Products';
import Cart from './Component/Cart';
import SavedItem from './Component/SavedItem';
import Settings from './Component/Setting';
import VDashboard from './Component/VDashboard';
import Order from './Component/Orders';
import { useState } from 'react';

function App() {
    var [showCategory, setShowCategory] = useState(true)
    
  return (
    <Router>
      <div className="App">
        <Header displayCategories={() => setShowCategory(!showCategory)}/>
        <Switch>
          <Route exact path="/">
              {showCategory && <Categories />}
              <Home />
          </Route>
          <Route path="/DashBoard">
              {showCategory && <Categories />}
              <UDashBoard/>
          </Route>
          <Route path="/Upload">
              <UploadProduct/>
          </Route>
          <Route path="/Billing">
              {showCategory && <Categories />}
              <Billing/>
              <Footer/>
          </Route>
          <Route path="/cart">
              {showCategory && <Categories />}
              <Cart/>
              <Footer/>
          </Route>
          <Route path="/VendorProducts">
              <VendorProducts/>
          </Route>
          <Route exact path="/product/:id">
              <Product/>
              <Footer/>
          </Route>
          <Route path="/products/:category">
              {showCategory && <Categories />}
              <Products/>
              <Footer/>
          </Route>
          <Route path="/vendor">
              <VDashboard/>
          </Route>
          <Route path="/order">
              <Order/>
          </Route>
          <Route path="/contact">
              {showCategory && <Categories />}
              <Contact/>
          </Route>
          <Route path="/saveditems">
              {showCategory && <Categories />}
              <SavedItem/>
          </Route>
          <Route path="/login">
              {showCategory && <Categories />}
              <Login/>
          </Route>
          <Route path="/signup">
              {showCategory && <Categories />}
              <SignUp/>
          </Route>
          <Route path="/sell">
              {showCategory && <Categories />}
              <VSignUp/>
          </Route>
          <Route path="/forgetpassword">
              {showCategory && <Categories />}
              <ForgetPassword/>
          </Route>
          <Route path="/editupload/:id">
              {showCategory && <Categories />}
              <EditProduct/>
          </Route>
          <Route path="/setting">
              <Settings/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
