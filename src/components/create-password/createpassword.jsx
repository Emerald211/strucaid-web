import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { userAtom } from 'src/states/user/user';
import { signUpAuth } from 'src/states/authentication/auth';
import { useAtom } from 'jotai';

const CreatePassWord = () => {
	const [loading, setLoading] = useState(false);

	const { register, handleSubmit } = useForm();

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

		const { password, confirmPassword } = data;

		if (password === confirmPassword) {
			toast.success('Password Created Sucessfully', {
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

			const userVerified = { ...userToVerify, password: password };

			console.log(userVerified);

			setUser((user) => [...user, userVerified]);

			setSignUpAuthentication({
				...signUpAuthentication,
				password: true,
			});

			const loadingState = () => setLoading(false);
			setTimeout(loadingState, 5000);
		} else {
			setLoading(true);
			toast.error('Password doesnt match', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			});
			const loadingState = () => setLoading(false);
			setTimeout(loadingState, 5000);
		}
	};

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
			{/* Same as */}
			<ToastContainer />
			<ToastContainer />
			<h2 className='font-thin mt-8'> Welcome To Strucaid</h2>

			<h4 className=' text-slate-300 text-xs'>
				You are almost ther just a few steps left
			</h4>

			<form onSubmit={handleSubmit(onSubmitAction)} className=' mt-5 '>
				<div>
					<h2>Create Password</h2>
					<input
						className=' outline-none border rounded-md mt-2 w-full px-2 h-[50px] text-xs'
						type='password'
						placeholder='8 digits character or more'
						name='password'
						id='password'
						{...register('password')}
					/>
				</div>

				<div>
					<h2>Confirm Password</h2>
					<input
						className=' outline-none border rounded-md mt-2 w-full px-2 h-[50px] text-xs'
						type='password'
						placeholder='confirm your password '
						name='confirmPassword'
						id='confirmPassword'
						{...register('confirmPassword')}
					/>
				</div>

				<div className=' mt-4'>
					<button className=' bg-blue-600 text-white w-full text-center py-4 rounded-md'>
						{loading ? 'Loading....' : 'Create Password'}
					</button>
				</div>
			</form>
		</section>
	);
};

export default CreatePassWord;
