/* eslint-disable react/jsx-no-comment-textnodes */
import Navbar from 'src/components/navbar/navbar';
import { FaArrowRight } from 'react-icons/fa';

import ProductCard from 'src/components/product-card/productCard';
import SpecialDeal from 'src/components/special-deals/specialdeal';
import img1 from 'src/assets/Frame 6134.png';
import Review from 'src/components/review-card/review';
import Footer from 'src/components/footer/footer';
import Waitlist from 'src/components/waitlist/waitlist';

const Home = () => {
	return (
		<div>
			<Navbar />

			<section className=' font-serrat px-5 md:px-24 bg-banner flex items-center  h-screen w-full bg-cover bg-no-repeat'>
				<div className=' px-5 py-5   w-[600px] h-[400px] flex flex-col justify-center'>
					<h1 className=' font-bold text-3xl text-white font-serrat'>
						Quality Building Materials at Unbeatable Prices.
					</h1>
					<p className=' text-sm text-white'>
						Let us provide you with the best building materials at affordable
						Prices.
					</p>

					<button className=' flex items-center gap-2 mt-4 w-[130px] bg-[#021853] text-white px-5 py-2'>
						<span>Explore </span>
						<FaArrowRight />
					</button>
				</div>
			</section>

			<section className=' flex flex-col items-center mt-12 font-serrat px-5 md:px-24'>
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
			</section>

			<section className=' font-serrat mt-24 flex flex-col px-10'>
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
			</section>

			<section className=' font-serrat h-[60dvh] mt-24 flex flex-col px-10'>
				<div className=' w-full h-full bg-slate-500'></div>
			</section>

			<SpecialDeal />

			<section className=' font-serrat h-[60dvh] mt-24 flex flex-col px-10'>
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
			</section>

			<section className=' mt-24 px-10 grid grid-cols-1 md:grid-cols-2'>
				<div>
					<img src={img1} alt='' />
				</div>

				<div className=' relative font-serrat px-10'>
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

					<button className=' absolute mt-6 md:mt-0 md:bottom-10 text-white bg-main py-2 px-3'>
						{' '}
						Learn More{' '}
					</button>
				</div>
			</section>

			<section className=' font-serrat mt-24 flex flex-col px-10'>
				<div className=' flex justify-between'>
					<div className=' flex flex-col'>
						<h1 className=' font-bold'>WHAT PEOPLE ARE SAYING ABOUT US</h1>
						<p className=' text-xs'>
							Explore the voices of excitement to get a glimpse of the positive
							impact we are bringing to you!
						</p>
					</div>
				</div>

				<div className=' flex md:flex-row flex-col gap-5 mt-10'>
					<Review />

					<Review />

					<Review />

					<Review />
				</div>
			</section>

			<Waitlist />

			<Footer />
		</div>
	);
};

export default Home;
