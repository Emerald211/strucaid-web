import ProductCard from '../product-card/productCard';

const SpecialDeal = () => {
	return (
		<section className=' font-serrat mt-24 flex flex-col px-10'>
			<div className=' flex justify-between'>
				<div className=' flex flex-col'>
					<h1 className=' font-bold'>Our Special Deals</h1>
					<p className=' text-xs'>Take a look at our popular products.</p>
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
	);
};

export default SpecialDeal;
