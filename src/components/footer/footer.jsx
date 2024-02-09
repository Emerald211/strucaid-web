// Footer.js
import { Link } from 'react-router-dom';
import { CiFacebook } from 'react-icons/ci';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import logo from '/src/assets/png 1.png';
import { CiLocationOn } from 'react-icons/ci';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer className=' mt-14 font-serrat  bg-white'>
			<div className='mx-auto w-full max-w-screen-xl'>
				<div className='grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4'>
					{/* Company Section */}
					<div className=' flex flex-col justify-start'>
						<img className=' w-[100px] h-[100px]' src={logo} alt='' />
						<div className=' flex flex-col gap-4 text-sm w-[180px] md:w-[276px] md:h-[128px]}'>
							<div className=' flex items-center gap-2 text-xs'>
								<CiLocationOn /> <span>Oyo State, Nigeria.</span>
							</div>
							<div className=' flex items-center gap-2 text-xs'>
								<MdOutlineEmail /> <span>strucaid@gmail.com</span>
							</div>
							<div className=' flex items-center gap-2 text-xs'>
								<FaPhoneAlt /> <span>+234 8164 400 723</span>
							</div>
						</div>
					</div>

					{/* Help Center Section */}
					<div>
						<h2 className='mb-6 text-sm font-semibold '>Company</h2>
						<ul className=' flex flex-col font-medium'>
							<Link>About Us</Link>
							<Link>Contact</Link>
							<Link>Reviews</Link>
						</ul>
					</div>

					{/* Legal Section */}
					<div>
						<h2 className='mb-6 text-sm font-semibold '>Get in Touch</h2>
						<ul className=' flex gap-3 text-xl font-medium'>
							<FaWhatsapp
								onClick={() =>
									window.open(
										'https://chat.whatsapp.com/Lg27iaP9O0m8miSVF9woQt',
										'_blank'
									)
								}
							/>
							<BsTwitter
								onClick={() =>
									window.open('https://x.com/ourstrucaid?s=09', '_blank')
								}
							/>
							<FaInstagram
								onClick={() =>
									window.open(
										'https://www.instagram.com/ourstrucaid?igsh=dDY0MnM3cTBmY3hy',
										'_blank'
									)
								}
							/>
							<FaLinkedin
								onClick={() =>
									window.open(
										'https://www.linkedin.com/company/ourstrucaid/',
										'_blank'
									)
								}
							/>
						</ul>

					
					</div>
				</div>

				{/* Bottom Section */}
				<div className='px-4 py-2  bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between'>
					<span className='text-xs text-gray-500 dark:text-gray-300 sm:text-center'>
						Strucaid © 2023 All Rights Reserved.
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
