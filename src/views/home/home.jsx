/* eslint-disable react/jsx-no-comment-textnodes */
import Navbar from 'src/components/navbar/navbar';
import { FaArrowRight } from 'react-icons/fa';

import ProductCard from '/src/components/product-card/productCard';
import SpecialDeal from '/src/components/special-deals/specialdeal';
import img1 from '/src/assets/Frame 6134.png';

import img3 from '/src/assets/Ellipse 7 (1).png';
import img4 from '/src/assets/Ellipse 7 (2).png';
import img5 from '/src/assets/Ellipse 7 (3).png';
import Review from '/src/components/review-card/review';
import Footer from '/src/components/footer/footer';
import Waitlist from '/src/components/waitlist/waitlist';
import soon from '/src/assets/soon.png';
import pInmg from '/src/assets/Rectangle 4055.png';
import pInmg1 from '/src/assets/Frame 6005.png';
import pInmg2 from '/src/assets/Frame 6005 (1).png';
import pInmg3 from '/src/assets/Frame 6005 (2).png';
import pInmg4 from '/src/assets/Frame 6005 (3).png';
import pInmg5 from '/src/assets/Frame 6014.png';
import pInmg6 from '/src/assets/Frame 6005 (4).png';
import pInmg7 from '/src/assets/Rectangle 4057.png';
import pInmg8 from '/src/assets/Frame 6009.png';
import { FaStar } from 'react-icons/fa';
const Home = () => {
	const handleClickScroll = () => {
		const element = document.getElementById('section-1');
		if (element) {
			// 👇 Will scroll smoothly to the top of the next section
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleClickScroll2 = () => {
		const element = document.getElementById('section-2');
		if (element) {
			// 👇 Will scroll smoothly to the top of the next section
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<div>
			<Navbar />

			<section className='  font-serrat px-5 md:px-24 bg-banner flex flex-col-reverse  md:flex-row items-center justify-center  h-screen w-full bg-cover bg-no-repeat'>
				<div id='section-2' className='px-5 py-5   md:w-[600px] md:h-[400px] i flex flex-col justify-center'>
					<h1 className=' font-bold text-3xl text-white font-serrat'>
						Quality Building Materials at Unbeatable Prices.
					</h1>
					<p className=' text-sm text-white'>
						Let us provide you with the best building materials at affordable
						Prices.
					</p>

					<button
						onClick={handleClickScroll}
						className=' flex items-center gap-2 mt-4 w-[100px] bg-[#021853] text-white px-5 py-2'>
						<span>Explore </span>
					</button>
				</div>
				<img className='order-1' src={soon} alt='' />
			</section>

			<section className=' flex flex-col mt-12 font-serrat px-5 md:px-24'>
				<h1 className=' text-main font-bold text-2xl'>About Us</h1>

				<p className=' py-5'>
					Welcome to STRUCAID, your one solution for seamless building projects
					in Nigeria. <br /> <br /> Building a home is a gratifying venture, but
					we understand the challenges and stress that come with it,
					particularly when navigating the troubles of buying materials and
					transporting them to the construction site. <br /> <br /> At STRUCAID,
					we've undertaken the mission to alleviate these burdens. We've
					reimagined the construction materials procurement process,
					transforming it into a hassle-free and efficient experience. Imagine
					having the entirety of construction supply shops at your fingertips –
					all within the confines of your smartphone <br /> <br /> Through a
					simple swipe and click, you can now effortlessly order the building
					materials you need. Our platform streamlines the entire process,
					offering you a curated selection of high-quality materials ready to be
					dispatched to your doorstep or any location you desire. <br /> <br />{' '}
					Say goodbye to the stress of physically visiting multiple stores and
					coordinating transportation logistics – STRUCAID brings the
					convenience of a virtual marketplace directly to you. <br /> <br />{' '}
					Embrace the future of stress-free building projects with STRUCAID.
				</p>

				<h1 className=' text-main font-bold text-2xl mt-5'>Our Brand Name</h1>

				<div className='grid grid-cols-1 gap-5 md:grid-cols-3 py-5'>
					<div className=' flex flex-col gap-3 '>
						<h1 className=' text-main font-bold text-xl'>STRUCTure</h1>
						<p>Structure; architecture, Building, Construction </p>
					</div>
					<div className='flex flex-col gap-3'>
						<h1 className='text-main font-bold text-xl'>AID </h1>
						<p>Aid; assist, help, relieve.</p>
					</div>
					<div>
						<h1 className='text-main font-bold text-xl'>= STRUCAID</h1>
					</div>
				</div>

				<h1 className=' text-main font-bold text-2xl mt-5'>Our Mission</h1>
				<p className=' py-5'>
					To revolutionize the building industry by offering people a
					stress-free shopping experience for all their building needs
				</p>

				<h1 className=' text-main font-bold text-2xl mt-5'>Our Vision</h1>
				<p className=' py-5'>
					To become the leading e-commerce platform for building materials in
					Nigeria, by providing superior customer service.
				</p>

				<h1 className=' text-main font-bold text-2xl mt-5'>Our Brand Value</h1>
				<p className=' py-5'>
					Convenience, Affordability, Quality, Transparency, Reliability,
					Accessibility, Elegance, Innovation
				</p>
			</section>

			<section className=' md:px-2'>
			<h1 className=' text-main font-bold text-xl'>
					A sneak peek at some products we will offer you
				</h1>
				<p>Take a look at our some of our products.</p>
		</section>

			<section className='flex flex-col  mt-12 font-serrat px-5 md:px-24'>
				

				<div className='  mt-10 grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-4'>
					<div>
						<img className=' rounded-lg' src={pInmg} alt='' />

						<div className=' flex justify-between mt-2'>
							<div>
								<h2>8x3 Iron rod</h2>
							</div>
						</div>
					</div>

					<div>
						<img className=' rounded-lg' src={pInmg2} alt='' />

						<div className=' flex justify-between mt-2'>
							<div>
								<h2>Chandelier Light</h2>
							</div>
						</div>
					</div>

					<div>
						<img className=' rounded-lg' src={pInmg3} alt='' />

						<div className=' flex justify-between mt-2'>
							<div>
								<h2>Automated door</h2>
							</div>
						</div>
					</div>

					<div>
						<img className=' rounded-lg' src={pInmg4} alt='' />

						<div className=' flex justify-between mt-2'>
							<div>
								<h2>Freshly cut planks</h2>
							</div>
						</div>
					</div>

					<div>
						<img className=' rounded-lg' src={pInmg5} alt='' />

						<div className=' flex justify-between mt-2'>
							<div>
								<h2>8x3 nails</h2>
							</div>
						</div>
					</div>

					<div>
						<img className=' rounded-lg' src={pInmg6} alt='' />

						<div className=' flex justify-between mt-2'>
							<div>
								<h2>Rollest paint</h2>
							</div>
						</div>
					</div>

					<div>
						<img className=' rounded-lg' src={pInmg7} alt='' />

						<div className=' flex justify-between mt-2'>
							<div>
								<h2>Modern Roofing sheet</h2>
							</div>
						</div>
					</div>

					<div>
						<img className=' rounded-lg' src={pInmg8} alt='' />

						<div className=' flex justify-between mt-2'>
							<div>
								<h2>House wallpaper</h2>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <section className=' flex flex-col items-center mt-12 font-serrat px-5 md:px-24'>
				<div className=' grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-10'>
					<div className='text-xs py-2 border border-slate-700 rounded-xl text-center w-[120px] md:w-[173px] h-[48] flex justify-center items-center'>
						<h3>Foundational Materials</h3>
					</div>

					<div className='text-xs py-2 border border-slate-700 rounded-xl text-center w-[120px] md:w-[173px] h-[48] flex justify-center items-center'>
						<h3>Roofing materials</h3>
					</div>

					<div className='text-xs py-2 border border-slate-700 rounded-xl text-center w-[120px] md:w-[173px] h-[48] flex justify-center items-center'>
						<h3>Electrical materials</h3>
					</div>

					<div className='text-xs py-2 border border-slate-700 rounded-xl  text-center w-[120px] md:w-[173px] h-[48] flex justify-center items-center'>
						<h3>Interior finishes</h3>
					</div>

					<div className='text-xs py-2 border border-slate-700 rounded-xl text-center w-[120px] md:w-[173px] h-[48] flex justify-center items-center'>
						<h3>Miscellaneous materials</h3>
					</div>
				</div>
				<div className=' grid grid-cols-2 md:grid-cols-5 gap-4 mt-5'>
					<div className='text-xs py-2 border border-slate-700 rounded-xl text-center w-[120px] md:w-[173px] h-[48] flex justify-center items-center'>
						<h3>Framing materials</h3>
					</div>

					<div className='text-xs py-2 border border-slate-700 rounded-xl text-center w-[120px] md:w-[173px] h-[48] flex justify-center items-center'>
						<h3>Windows and doors</h3>
					</div>

					<div className='text-xs py-2 border border-slate-700 rounded-xl text-center w-[120px] md:w-[173px] h-[48] flex justify-center items-center'>
						<h3>Plumbing materials</h3>
					</div>

					<div className='text-xs py-2 border border-slate-700 rounded-xl text-center w-[120px] md:w-[173px] h-[48] flex justify-center items-center'>
						<h3>HVAC materials</h3>
					</div>

					<div className='text-xs py-2 border border-slate-700 rounded-xl text-center w-[120px] md:w-[173px] h-[48] flex justify-center items-center'>
						<h3>Exterior finishes</h3>
					</div>
				</div>
			</section> */}

			{/* <section className=' font-serrat mt-24 flex flex-col px-10'>
				<div className=' flex justify-between'>
					<div className=' flex flex-col'>
						<h1 className=' font-bold'>Our Popular Deals</h1>
						<p className=' text-xs'>Take a look at our popular products.</p>
					</div>

					<h4>View all</h4>
				</div>

				<div className=' grid mt-10 gap-5 grid-cols-1 md:grid-cols-4'>
					<ProductCard />

					<ProductCard />

					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</section> */}

			{/* <section className=' font-serrat h-[60dvh] mt-24 flex flex-col px-10'>
				<div className=' w-full h-full bg-slate-500'></div>
			</section> */}

			{/* <SpecialDeal /> */}

			{/* <section className=' font-serrat h-[60dvh] mt-24 flex flex-col px-10'>
				<div className=' w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5 '>
					<div className=' bg-black h-full'></div>
					<div className=' bg-black h-full'></div>
				</div>
			</section>

			<section className=' font-serrat mt-24 flex flex-col px-10'>
				<div className=' flex justify-between'>
					<div className=' flex flex-col'>
						<h1 className=' font-bold'>Deals of the day</h1>
						<p className=' text-xs'>
							Check out the unbeatable savigs and exclusive offers in our “Deals
							of the day”
						</p>
					</div>

					<h4>View all</h4>
				</div>

				<div className=' grid mt-10 gap-5 grid-cols-1 md:grid-cols-4'>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</section> */}

			<section id='section-1' className=' mt-24 px-10 grid gap-5 grid-cols-1 md:grid-cols-2'>
				<div>
					<img src={img1} alt='' />
				</div>

				<div className=' relative font-serrat px-5 md:px-10'>
					<h1 className=' text-xl font-bold'>
						WE PROVIDE OUR CUSTOMERS THE BEST BUILDING MATERIALS
					</h1>
					<p className=' mt-5 text-sm'>
						Welcome to our world of quality and excellence! At Strucaid, we take
						pride in offering you, the absolute best in building materials. We
						are dedicated to providing unparalleled quality, ensuring your
						projects stand the test of time. Discover the difference with
						Strucaid - where top-notch building materials meet your vision for
						excellence. Build with confidence, build with us!
					</p>

					<button onClick={handleClickScroll2} className=' absolute mt-6 md:mt-0 md:bottom-10 text-white bg-main py-2 px-3'>
						{' '}
						Learn More{' '}
					</button>
				</div>
			</section>

			<section className=' font-serrat mt-24 flex flex-col px-5 md:px-10'>
				<div className=' flex justify-between'>
					<div className=' flex flex-col'>
						<h1 className=' font-bold'>WHAT PEOPLE ARE SAYING ABOUT US</h1>
						<p className=' text-xs'>
							Explore the voices of excitement to get a glimpse of the positive
							impact we are bringing to you!
						</p>
					</div>
				</div>

				<div className=' flex md:flex-row flex-col  gap-5 mt-10'>
					<div className=' font-serrat w-[327px]  px-8 py-5 bg-slate-300'>
						<img src={img3} alt='' />
						<h5 className=' text-sm font-bold mt-3'>Fadilulah</h5>

						<p className=' mt-8'>
							Strucaid helps you avoid the stress of entering the market without
							knowing prices or how to buy materials. This way, buying and
							selling construction materials becomes much simpler.
						</p>

						<div className=' flex items-center gap-2 mt-8'>
							<FaStar className=' text-2xl text-orange-500' />
							<FaStar className=' text-2xl text-orange-500' />
							<FaStar className=' text-2xl text-orange-500' />
							<FaStar className=' text-2xl text-orange-500' />
							<FaStar className=' text-2xl' />

							<h6 className='  font-bold'>4.9</h6>
						</div>
					</div>

					<div className=' font-serrat w-[327px]  px-8 py-5 bg-slate-300'>
						<img src={img4} alt='' />
						<h5 className=' text-sm font-bold mt-3'>Shalom</h5>

						<p className=' mt-8'>
							Strucaid is a platform I believe has great potential Looking at
							the progress so far I believe it's a platform that's sees into the
							future Solving problems beyond imagination, most especially the
							world of construction.
						</p>

						<div className=' flex items-center gap-2 mt-8'>
							<FaStar className=' text-2xl text-orange-500' />
							<FaStar className=' text-2xl text-orange-500' />
							<FaStar className=' text-2xl text-orange-500' />
							<FaStar className=' text-2xl text-orange-500' />
							<FaStar className=' text-2xl' />

							<h6 className='  font-bold'>4.9</h6>
						</div>
					</div>

					<div className=' font-serrat w-[327px]  px-8 py-5 bg-slate-300'>
						<img src={img5} alt='' />
						<h5 className=' text-sm font-bold mt-3'>Tolu</h5>

						<p className=' mt-8'>
							Strucaid can solve scamming problems, overcharging for products
							and can easily connect buyers and sellers Strucaid can be a big
							platform if it's ability to efficiently attend to catering to
							products well.
						</p>

						<div className=' flex items-center gap-2 mt-8'>
							<FaStar className=' text-2xl text-orange-500' />
							<FaStar className=' text-2xl text-orange-500' />
							<FaStar className=' text-2xl text-orange-500' />
							<FaStar className=' text-2xl text-orange-500' />
							<FaStar className=' text-2xl' />

							<h6 className='  font-bold'>4.9</h6>
						</div>
					</div>
				</div>
			</section>

			<Waitlist />

			<Footer />
		</div>
	);
};

export default Home;
