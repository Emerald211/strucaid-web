import { useAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import { signUpAuth } from '/src/states/authentication/auth';

import { userAtom } from '/src/states/user/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const PersonalDetails = () => {
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useAtom(userAtom);

	const navigate = useNavigate();
	const [signUpAuthentication, setSignUpAuthentication] = useAtom(signUpAuth);

	const { register, handleSubmit } = useForm();

	const onSubmitAction = (data) => {
		setLoading(true);

		toast.success(' Account Created Succesfully', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});

		console.log(data);

		const newUser = {
			...data,
			id: crypto.randomUUID(),
		};

		console.log(newUser);

		setUser((user) => [...user, newUser]);

		setSignUpAuthentication({
			...signUpAuthentication,
			personalDetails: true,
		});

		const loadingState = () => setLoading(false);

		setTimeout(loadingState, 5000);
		const navigateToVerifyEmail = () => navigate('/signup/verifyemail');

		setTimeout(navigateToVerifyEmail, 5000);
	};

	console.log(user);
	console.log(signUpAuthentication);
	return (
		<section className=' px-32 flex flex-col justify-center '>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
			/>
				<ToastContainer />
			<h2 className='font-thin'> Back to Home Page </h2>

			<h2 className='font-thin mt-8'> Welcome To Strucaid</h2>

			<h4 className=' text-slate-300 text-xs'>
				Create your account with a few steps
			</h4>

			<form onSubmit={handleSubmit(onSubmitAction)} className=' mt-5 '>
				<div>
					<h2>First Name</h2>
					<input
						className=' outline-none border rounded-md mt-2 w-full px-2 h-[50px] text-xs'
						type='text'
						placeholder=' Ben'
						name='FirstName'
						id='FirstName'
						{...register('firstName')}
					/>
				</div>

				<div className=' mt-2'>
					<h2>LastName (Surname)</h2>
					<input
						className=' outline-none border rounded-md mt-2 w-full px-2 h-[50px] text-xs'
						type='text'
						placeholder=' Enter your password'
						id='LastName'
						name='LastName'
						{...register('lastName')}
					/>
				</div>

				<div className=' mt-2'>
					<h2>Phone Number</h2>
					<input
						className=' outline-none border rounded-md mt-2 w-full px-2 h-[50px] text-xs'
						type='text'
						placeholder=' Enter your phone no'
						id='phoneNo'
						name='phoneNo'
						{...register('phoneNo')}
					/>
				</div>

				<div className=' mt-4'>
					<button className=' bg-blue-600 text-white w-full text-center py-4 rounded-md'>
						{loading ? 'Loading...' : 'Create Account'}
					</button>
				</div>
				<div className=' mt-4'>
					<button className=' border text-slate-400 w-full text-center py-4 rounded-md'>
						Sign In
					</button>
				</div>
			</form>
		</section>
	);
};

export default PersonalDetails;
