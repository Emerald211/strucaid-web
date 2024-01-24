import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './views/login/login';
import Signup from './views/signup/signup';
import PersonalDetails from './components/personal-details/personalDetailsForm';
import EmailVerification from './components/email-verification/emailVerification';
import CreatePassWord from './components/create-password/createpassword';
import Home from './views/home/home';
import Shop from './views/shop/shop';
import ShopIndex from './views/shop/shopindex/shopindex';
import Cart from './views/cart/cart';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/signup' element={<Signup />}>
				<Route index element={<PersonalDetails />} />
				<Route path='verifyemail' element={<EmailVerification />} />
				<Route path='createpassword' element={<CreatePassWord />} />
			</Route>
			<Route path='/shop' element={<Shop />}>
				<Route index element={<ShopIndex />} />
				<Route path='cart' element={<Cart />} />
			</Route>
		</Routes>
	);
}

export default App;
