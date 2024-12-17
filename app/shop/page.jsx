import { categories, locations, products } from '@/libs/constant';

import Button from '@/components/ui/button';
import Link from 'next/link';
import { ProductCard } from '@/components/shop/product-card';
import { Sidebar } from '@/components/shop/sidebar';

export default function ShopPage() {
	return (
		<>
			<div className='mb-4'>
				<h1 className='mb-2 text-4xl font-bold'>Filter</h1>
			</div>

			<div className='grid items-start grid-cols-1 gap-6 lg:grid-cols-5'>
				<Sidebar
					className='w-full lg:col-span-2 xl:col-span-1'
					categories={categories}
					locations={locations}
				/>

				<div className='lg:col-span-3 xl:col-span-4'>
					<div className='grid gap-6 mb-6 sm:grid-cols-2 xl:grid-cols-4'>
						{products.map((product) => (
							<Link href={'/delivery/' + product.id}>
								<ProductCard
									key={product.id}
									product={product}
								/>
							</Link>
						))}
					</div>

					<Button>Lihat Selengkapnya</Button>
				</div>
			</div>
		</>
	);
}
