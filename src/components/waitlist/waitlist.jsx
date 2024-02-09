import { MdOutlineEmail } from 'react-icons/md';
import logo from '/src/assets/png 1.png';
import { useState } from 'react';

const Waitlist = () => {
	const [subscribe, setSubscribe] = useState(false);
	return (
		<>
			{subscribe && (
				<div className='fixed top-5 left-5 z-50 flex justify-center items-center flex-col gap-5 font-serrat bg-white shadow-xl w-[90vw] h-[50vh]'>
					<img src={logo} alt='' />

					<h1 className=' text-main'>Join our Comminity today!</h1>

					<button
						onClick={() => {
							window.open(
								'https://chat.whatsapp.com/Lg27iaP9O0m8miSVF9woQt',
								'_blank'
							);
						}}
						className=' px-5 py-2 bg-main text-white'>
						Click to Join Now
					</button>
				</div>
			)}

			{subscribe && (
				<div className=' w-screen h-screen bg-slate-600 opacity-50 z-30 fixed top-0'></div>
			)}
			<section className=' font-serrat  bg-banner2 h-[60dvh] mt-24 flex flex-col justify-center  items-center px-10'>
				<div className=' w-[80%] md:w-[783px] text-center flex flex-col '>
					<h1 className=' text-white font-bold'>
						JOIN THE WAITLIST COMMUNITY TODAY
					</h1>

					<p className=' text-sm mt-4 text-white'>
						Explore the voices of excitement to get a glimpse of the positive
						impact we are bringing to you! Don’t worry, we won’t spam you.
					</p>

                    <form onSubmit={(e) => {
                        e.preventDefault()
                    }} className=' mt-14' action=''>
						<div className='relative'>
							<input
								className=' w-full py-3 px-14 outline-none rounded-3xl '
								type='email'
							/>
							<MdOutlineEmail className=' absolute text-xl top-4 left-6' />
							<button onClick={() => setSubscribe(true)} className=' bg-main px-4 absolute rounded-2xl text-sm top-1 right-3 py-2 text-center text-white'>
								Join
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default Waitlist;
