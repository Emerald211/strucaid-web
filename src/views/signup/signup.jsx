import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { signUpAuth } from 'src/states/authentication/auth';

const Signup = () => {
	const [signUpAuthentication] = useAtom(signUpAuth);
	const [className, setClassName] = useState('');

	useEffect(() => {
		if (signUpAuthentication.emailVerified === true) {
			setClassName('text-white');
		} else {
			setClassName('text-slate-400');
        }
        
       
	}, [signUpAuthentication]);
	return (
		<div className=' grid grid-cols-2 w-screen h-screen font-serrat'>
			<section className=' px-12 bg-main flex flex-col justify-center '>
				<h2 className=' text-orange-600 font-thin'>Building Materials</h2>
				<h1 className=' text-white text-4xl'>
					START BUILDING NOW WITH STRUCAID
				</h1>

				<div className='flex mt-8 gap-4 flex-col'>
					<div className=' flex items-center gap-4'>
						<div className='  w-[30px] h-[30px] bg-white text-blue-600 flex justify-center items-center text-center rounded-full'>
							1
						</div>

						<h2 className=' text-white'>Personal Details</h2>
					</div>

					<div className=' flex items-center gap-4'>
						<div className='  w-[30px] h-[30px] bg-white text-blue-600 flex justify-center items-center text-center rounded-full'>
							2
						</div>

						<h2 className={className}>Email Verification</h2>
					</div>

					<div className=' flex items-center gap-4'>
						<div className='  w-[30px] h-[30px] bg-white text-blue-600 flex justify-center items-center text-center rounded-full'>
							3
						</div>

						<h2 className={signUpAuthentication.password ? 'text-white' : 'text-slate-400'}>Password</h2>
					</div>
				</div>
			</section>

			<Outlet />
		</div>
	);
};

export default Signup;
