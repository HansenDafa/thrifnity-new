'use client';

import { Heart, Search, ShoppingCart, User } from 'lucide-react';

import Dropdown from '@/components/dropdown/Dropdown';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import Logo from '@/components/ui/logo';

export const Navbar = ({ ...props }) => {
	return (
		<main className='py-3 bg-sage'>
			<div className='container flex items-center justify-between max-w-7xl'>
				<Link href='/'>
					<Logo className='text-2xl font-bold text-white' />
				</Link>

				<div className='relative hidden w-full lg:flex max-w-96'>
					<div className='absolute transform -translate-y-1/2 left-3 top-1/2'>
						<Search className='size-5 text-zinc-500' />
					</div>

					<Input
						type='search'
						className='pl-10'
						placeholder='Search Product...'
					/>
				</div>

				<div className='flex items-center space-x-4'>
					<button>
						<Heart className='text-light size-6' />
					</button>

					<button>
						<ShoppingCart className='text-light size-6' />
					</button>

					<Dropdown>
						<Dropdown.Title>
							<User className='text-light size-6' />
						</Dropdown.Title>
						<Dropdown.Menu>
							<Link href='/login'>
								<span className='block w-full p-2 font-medium rounded-md hover:bg-zinc-100'>
									Login
								</span>
							</Link>
							<Link href='/register'>
								<span className='block w-full p-2 font-medium rounded-md hover:bg-zinc-100'>
									Register
								</span>
							</Link>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
		</main>
	);
};
