import { MdOutlineEmail } from 'react-icons/md';

const Waitlist = () => {
  return (
    
			<section className=' font-serrat  bg-banner2 h-[60dvh] mt-24 flex flex-col justify-center  items-center px-10'>
            <div className=' w-[80%] md:w-[783px] text-center flex flex-col '>
                <h1 className=' text-white font-bold'>JOIN THE WAITLIST COMMUNITY TODAY</h1>

                <p className=' text-sm mt-4 text-white'>
                    Explore the voices of excitement to get a glimpse of the positive
                    impact we are bringing to you! Don’t worry, we won’t spam you.
                </p>

                <form className=' mt-14' action=''>
                    <div className='relative'>
                        <input
                            className=' w-full py-3 px-14 outline-none rounded-3xl '
                            type='email'
                        />
                        <MdOutlineEmail className=' absolute text-xl top-4 left-6' />
                        <button className=' bg-main px-4 absolute rounded-2xl text-sm top-1 right-3 py-2 text-center text-white'>Join</button>
                    </div>
                </form>
            </div>
        </section>
  )
}

export default Waitlist;