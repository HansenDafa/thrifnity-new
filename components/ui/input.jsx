import * as React from 'react';

import { cn } from '@/libs/utils';

export const Input = ({ className, ...props }) => {
	return (
		<input
			{...props}
			className={cn(
				'px-4 py-3 w-full leading-tight rounded-lg outline-none focus:outline-none focus:ring-0 font-sans text-sm bg-zinc-100 border border-zinc-200 focus:border-sage',
				className
			)}
		/>
	);
};
