import { useAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import { signUpAuth } from '/src/states/authentication/auth';
import { userAtom } from '/src/states/user/user';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const EmailVerification = () => {
	const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

	const [user, setUser] = useAtom(userAtom);
	const [signUpAuthentication, setSignUpAuthentication] = useAtom(signUpAuth);

	const userIndexToVerify = user.length - 1;

	const userToVerify = user[userIndexToVerify];

	const filterUserToVerify = user.filter(
		(eachuser) => eachuser.id !== userToVerify.id
	);

	console.log(filterUserToVerify);

	const onSubmitAction = (data) => {
		setLoading(true);

		toast.success(' Email Verified', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});

		setUser(() => [...filterUserToVerify]);
		const { email } = data;

		const userVerified = { ...userToVerify, email: email };

		console.log(userVerified);

		setUser((user) => [...user, userVerified]);

		setSignUpAuthentication({
			...signUpAuthentication,
			emailVerified: true,
		});

		const loadingState = () => setLoading(false);

        setTimeout(loadingState, 5000);

        const navigateToVerifyPassword = () => navigate('/signup/createpassword')
        
        setTimeout(navigateToVerifyPassword, 5000)
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
			<h2 className='font-thin mt-8'> Welcome To Strucaid</h2>

			<h4 className=' text-slate-300 text-xs'>
				You are almost ther just a few steps left
			</h4>

			<form onSubmit={handleSubmit(onSubmitAction)} className=' mt-5 '>
				<div>
					<h2>Email</h2>
					<input
						className=' outline-none border rounded-md mt-2 w-full px-2 h-[50px] text-xs'
						type='email'
						placeholder='Enter your email '
						name='Email'
						id='Email'
						{...register('email')}
					/>
				</div>

				<div className=' mt-4'>
					<button className=' bg-blue-600 text-white w-full text-center py-4 rounded-md'>
						{loading ? 'Loading....' : 'Verify Email'}
					</button>
				</div>
				<div className=' mt-4'>
					<button className=' border text-slate-400 w-full text-center py-4 rounded-md'>
						Back
					</button>
				</div>
			</form>
		</section>
	);
};

export default EmailVerification;
