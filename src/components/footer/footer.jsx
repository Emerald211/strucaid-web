// Footer.js
import { Link } from 'react-router-dom';
import { CiFacebook } from 'react-icons/ci';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhoneAlt } from "react-icons/fa";
import logo from 'src/assets/png 1.png'

const Footer = () => {
	return (
		<footer className=' mt-14 font-serrat  bg-white'>
			<div className='mx-auto w-full max-w-screen-xl'>
				<div className='grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4'>
					{/* Company Section */}
					<div className=' flex flex-col justify-start'>
						<img className=' w-[100px] h-[100px]' src={logo} alt='' />
						<div className='  text-sm w-[180px] md:w-[276px] md:h-[128px]}'>
							<p>
								The Tower, <br /> Adjacent Daniela Hostel, <br /> Under-G,
								LAUTECH,Ogbomoso, <br /> Oyo state, Nigeria.
							</p>
						</div>
					</div>

					{/* Help Center Section */}
					<div>
						<h2 className='mb-6 text-sm font-semibold '>Links</h2>
						<ul className=' flex flex-col font-medium'>
							<Link>Home</Link>
							<Link>About</Link>
							<Link>Testimonies</Link>
							<Link>Sermon</Link>
							<Link>Giving</Link>
							<Link>Blog</Link>
							<Link>CSR</Link>
						</ul>
					</div>

					{/* Legal Section */}
					<div>
						<h2 className='mb-6 text-sm font-semibold '>
							Get in Touch
						</h2>
						<ul className=' flex gap-3 text-xl font-medium'>
							<CiFacebook />
							<TiSocialTwitterCircular />
							<FaYoutube />
							<FaInstagram />
						</ul>

						<div className=' mt-10  flex flex-col gap-5'>
							<div className=' flex gap-3 items-center'>
								<MdOutlineEmail />
								<h6>info@strucaid.com</h6>
							</div>

							<div className=' flex gap-3 items-center'>
								<FaPhoneAlt />
								<h6>+234 806637282882</h6>
							</div>
						</div>
					</div>

				</div>

				{/* Bottom Section */}
				<div className='px-4 py-2  bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between'>
					<span className='text-xs text-gray-500 dark:text-gray-300 sm:text-center'>
				Strucaid © 2023  All Rights
						Reserved.
					</span>

					
				</div>
			</div>
		</footer>
	);
};

export default Footer;
