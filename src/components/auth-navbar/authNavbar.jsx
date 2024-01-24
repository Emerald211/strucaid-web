import { Link } from 'react-router-dom';
import logo from 'src/assets/png 1.png';
import { CiSearch } from "react-icons/ci";
const AuthNavbar = () => {
	return (
		<nav className=' py-4 px-10 font-serrat text-slate-500 flex items-center justify-between'>
			<img src={logo} alt='logo' />

			<form className='' action=''>
				<div className='relative flex items-center'>
					<input
						className=' border text-xs border-slate-400 w-[400px] py-3 px-14 outline-none rounded-md '
                        type='email'
                        placeholder='Search Products..'
					/>
					<CiSearch className=' absolute text-xl top-3 left-6' />
					<button className=' bg-main px-4 absolute rounded-md text-sm top-2 right-3 py-1 text-center text-white'>
						Search
					</button>
				</div>
			</form>

			<ul className='items-center flex gap-8'>
				<li>
					<Link>Home</Link>
				</li>
				<li>
					<Link>About</Link>
				</li>
				<button className=' px-4 py-3 bg-main text-white'> Log in</button>
				<button className=' px-4 py-3 bg-main text-white'> Sign Up</button>
			</ul>
		</nav>
	);
};

export default AuthNavbar;
