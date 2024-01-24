import pInmg from '/src/assets/Rectangle 4055.png';

const ProductCard = () => {
	return (
		<div>
			<img className=' rounded-lg' src={pInmg} alt='' />

			<div className=' flex justify-between mt-2'>
				<div>
					<h2>8x3 Iron rod</h2>
					<h6 className=' text-xs'>18 pieces makes a bundle</h6>
                </div>
                
                <h5>N5200</h5>
			</div>
		</div>
	);
};

export default ProductCard;
