import img1 from 'src/assets/Frame 56341.png';
import { useForm } from 'react-hook-form';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useAtom } from 'jotai';
import { userAtom } from '/src/states/user/user';

const Login = () => {
	const { register, handleSubmit } = useForm();

	const [user, setUser] = useAtom(userAtom);

	const onSubmitAction = (data) => {
		const { email, password } = data;

		console.log(email, password);

		setUser((user) => [...user, {
			email: email,
			password: password
		}]);
	};

	console.log(user);

	return (
		<div className=' grid grid-cols-2 w-screen h-screen font-serrat'>
			<section className=' px-12 bg-main flex flex-col justify-center '>
				<h2 className=' text-orange-400 font-bold'>Building Materials</h2>
				<h1 className=' text-white text-4xl font-bold'>
					START BUILDING NOW WITH STRUCAID
				</h1>

				<LazyLoadImage
					src={img1}
					effect='blur'
					width={400}
					height={400}
					className=' mt-8'
				/>
			</section>

			<section className=' px-32 flex flex-col justify-center '>
				<h2 className='font-thin'> Welcome Back !</h2>

				<h4 className=' text-slate-300 text-xs'>
					Please Enter your username and password
				</h4>

				<form onSubmit={handleSubmit(onSubmitAction)} className=' mt-5 '>
					<div>
						<h2>Email</h2>
						<input
							className=' outline-none border rounded-md mt-2 w-full px-2 h-[50px] text-xs'
							type='text'
							placeholder=' Enter your email'
							name='email'
							id='email'
							{...register('email')}
						/>
					</div>

					<div className=' mt-2'>
						<h2>Password</h2>
						<input
							className=' outline-none border rounded-md mt-2 w-full px-2 h-[50px] text-xs'
							type='text'
							placeholder=' Enter your password'
							id='password'
							name='password'
							{...register('password')}
						/>
					</div>

					<div className=' flex mt-4'>
						<h2 className=' ml-auto mt-2 text-red-500 text-xs'>
							Forgot password
						</h2>
					</div>

					<div className=' mt-4'>
						<button className=' bg-main text-white w-full text-center py-4 rounded-md'>
							Submit
						</button>
					</div>
					<div className=' mt-4'>
						<button className=' border text-slate-400 w-full text-center py-4 rounded-md'>
							Create Account
						</button>
					</div>
				</form>
			</section>
		</div>
	);
};

export default Login;
