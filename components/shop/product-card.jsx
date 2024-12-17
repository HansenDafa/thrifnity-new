import { Heart } from 'lucide-react';
import Image from 'next/image';
import { formatPrice } from '@/libs/utils';

export const ProductCard = ({ product }) => {
	return (
		<div className='p-4 bg-white border rounded-lg border-zinc-200'>
			<Image
				src={product.image}
				alt={product.label}
				width={600}
				height={600}
				className='object-cover mb-4 overflow-hidden rounded-md'
			/>

			<div className='mb-4'>
				<h5 className='mb-2 font-semibold'>{product.label}</h5>
				<span className='text-muted hover:text-sage'>
					{product.store}
				</span>
			</div>

			<div className='flex items-center justify-between w-full text-sage'>
				<span className='font-semibold'>
					{formatPrice(product.price)}
				</span>
				<Heart className='size-5' />
			</div>
		</div>
	);
};
