import Link from 'next/link';
import { cn } from '@/libs/utils';

export const Sidebar = ({ categories, locations, className, ...props }) => {
	return (
		<div className={cn('bg-white border rounded-lg', className)}>
			<div className='px-6 py-4'>
				<h4 className='mb-2 font-semibold'>Kategori</h4>
				<ul className='flex flex-col space-y-1 list-none'>
					{categories.map((category) => (
						<li
							key={category.label}
							className='text-sm hover:text-sage text-muted'>
							<Link href={category.href}>
								<span>{category.label}</span>
							</Link>
						</li>
					))}
				</ul>
			</div>

			<div className='border-b border-zinc-200'></div>

			<div className='px-6 py-4'>
				<h4 className='mb-2 font-semibold'>Lokasi</h4>
				<ul className='space-y-2'>
					{locations.map((item) => (
						<li key={item.id}>
							<div className='flex'>
								<label className='flex items-center'>
									<input
										type='checkbox'
										className='border-gray-300 rounded size-4 text-sage-600 focus:ring-sage-500 checked:bg-sage checked:focus:bg-sage checked:hover:bg-sage focus:ring-sage'
									/>
									<span className='ml-2 text-sm font-medium text-muted'>
										{item.label}
									</span>
								</label>
							</div>
						</li>
					))}
				</ul>
			</div>

			<div className='border-b border-zinc-200'></div>

			<div className='px-6 py-4'>
				<h4 className='mb-2 font-semibold'>Harga</h4>
				<div className='flex flex-col space-y-2'>
					<div className='flex items-center text-sm'>
						<span className='p-2 font-medium border border-r-0 border-zinc-200 bg-zinc-100 rounded-l-md'>
							Rp.
						</span>
						<input
							type='text'
							className='w-full p-2 text-sm border rounded-r-lg border-zinc-200 bg-zinc-50 focus:border-zinc-200 focus:ring-0'
							placeholder='Harga Maksimal'
						/>
					</div>

					<div className='flex items-center text-sm'>
						<span className='p-2 font-medium border border-r-0 border-zinc-200 bg-zinc-100 rounded-l-md'>
							Rp.
						</span>
						<input
							type='text'
							className='w-full p-2 text-sm border rounded-r-lg border-zinc-200 bg-zinc-50 focus:border-zinc-200 focus:ring-0'
							placeholder='Harga Minimal'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
