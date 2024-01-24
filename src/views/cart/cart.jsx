import cartimg from '/src/assets/bag.png';
import Footer from '/src/components/footer/footer';
import SpecialDeal from '/src/components/special-deals/specialdeal';
import Waitlist from '/src/components/waitlist/waitlist';

const Cart = () => {
	return (
        <>
            <div className=' font-serrat bg-slate-400 px-12 flex flex-col py-12 min-h-screen min-w-full'>
			<div className=' bg-white py-12 w-full min-h-[80vh] '>
				<div className=' flex flex-col items-center justify-center'>
					<div className=' relative'>
						<img src={cartimg} alt='' />
						<div className=' absolute bottom-5 right-0 bg-main text-center flex justify-center items-center w-[30px] h-[30px] rounded-full text-white'>
							0
						</div>
					</div>

					<h1 className=' font-bold'>Your cart is Empty!</h1>
                    <p>Browse our categories and discover our best deals!</p>
                    
                    <button className=' mt-8 rounded-md bg-main px-3 py-2 text-white'>Start Shopping</button>
				</div>
			</div>
            </div>
            
            <section className='  font-serrat'>
                <SpecialDeal />
            </section>

			<Waitlist />

			<Footer />
            
        </>
	);
};

export default Cart;
