import * as React from 'react';

import {
	CarFront,
	Handshake,
	Package,
	PencilIcon,
	TrashIcon,
	User,
} from 'lucide-react';
import { formatDate, formatPrice } from '@/libs/utils';

import Button from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/libs/constant';

const events = [
	{
		label: 'Sedang Diproses',
		icon: Package,
	},
	{
		label: 'Pick Up',
		icon: User,
	},
	{
		label: 'Sedang Diantar',
		icon: CarFront,
	},
	{
		label: 'Telah Diterima',
		icon: Handshake,
	},
];

const trace = [
	{
		label: 'Paket dipacking',
		datetime: '2024-11-11T12:45:01.473Z',
	},
	{
		label: 'Paket dibawa oleh kurir',
		datetime: '2024-11-12T03:00:01.473Z',
	},
	{
		label: 'Paket telah sampai di DC Cakung',
		datetime: '2024-11-17T08:30:01.473Z',
	},
	{
		label: 'Paket diterima',
		datetime: '2024-11-20T06:00:01.473Z',
	},
];

export default async function ShopPage({ params }) {
	const { id } = await params;
	const product = products.find((p) => p.id === Number(id));

	if (!product) {
		return (
			<>
				<div className='mb-4'>
					<h1 className='mb-2 text-4xl font-bold'>
						Product Not Found
					</h1>
					<p className='text-muted'>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Ullam perferendis, doloribus adipisci non ad
						cumque maxime laborum assumenda? Minus, officiis.
					</p>
				</div>

				<Link href='/'>
					<Button>Back to Homepage</Button>
				</Link>
			</>
		);
	}

	return (
		<>
			<div className='mb-4'>
				<h1 className='mb-2 text-4xl font-bold'>Delivery Details</h1>
			</div>

			<div className='p-6 mb-6 bg-white border rounded-lg border-zinc-200'>
				<div className='mb-4'>
					<h2 className='text-xl font-bold text-sage'>
						{product.store}
					</h2>
					<span className='text-muted hover:text-sage'>
						{product.city}
					</span>
				</div>

				<div className='flex gap-6'>
					<Image
						src={product.image}
						alt={product.label}
						width={150}
						height={150}
						className='rounded-lg object-coveroverflow-hidden'
					/>

					<div className='flex flex-col justify-between'>
						<div className='flex flex-col space-y-2'>
							<h5 className='font-semibold'>{product.label}</h5>
							<span className='text-muted hover:text-sage'>
								350gr BLACK, M Likenew
							</span>
							<span className='font-semibold '>
								{formatPrice(product.price)}
							</span>
						</div>

						<span className='font-bold text-sage'>1 Pcs</span>
					</div>
				</div>
			</div>

			<div className='flex items-start justify-between mb-6'>
				{events.map((event, index) => {
					const Icon = event.icon;
					return (
						<React.Fragment key={event.label}>
							<div className='relative flex flex-col items-center space-y-2'>
								<div className='flex items-center justify-center bg-white border rounded-full size-16 border-zinc-200'>
									<Icon className='size-7' />
								</div>
								<span className='lg:whitespace-nowrap'>
									{event.label}
								</span>
							</div>
							{index !== events.length - 1 && (
								<div className='w-full mt-8 border-b border-zinc-300'></div>
							)}
						</React.Fragment>
					);
				})}
			</div>

			<div className='p-6 mb-6 bg-white border rounded-lg border-zinc-200'>
				<div className='mb-4'>
					<h3 className='text-lg font-bold text-sage'>
						Lacak Pesanan
					</h3>
					<p className='text-zinc-500'>

					</p>
				</div>

				<div className='relative flex flex-col space-y-6'>
					{trace.map((item, index) => (
						<div key={index} className='flex items-start space-x-4'>
							<div className='flex-shrink-0 mt-1'>
								<div className='rounded-full size-4 bg-sage'></div>
							</div>

							<div className='flex flex-col space-y-1'>
								<div className='text-sm font-medium'>
									{item.label}
								</div>

								<div className='text-sm text-zinc-500'>
									{formatDate(item.datetime)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
