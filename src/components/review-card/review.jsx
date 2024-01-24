import profile from '/src/assets/Ellipse 7.png';
import { FaStar } from 'react-icons/fa';

const Review = () => {
	return (
		<div className=' font-serrat w-[327px]  px-8 py-5 bg-slate-300'>
			<img src={profile} alt='' />
			<h5 className=' text-sm font-bold mt-3'>Engr Akindiya Sunkanmi</h5>

			<p className=' mt-8'>
				askfdhsadasd adsadasdjas adihasdjhj kasn askfdhsadasd adsadasdjas
				adihasdjhj kasn askfdhsadasd adsadasdjas adihasdj askfdhsadasd adsa.
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
	);
};

export default Review;
