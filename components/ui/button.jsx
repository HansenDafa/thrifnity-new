import * as React from 'react';

import { cn } from '@/libs/utils';

const Button = ({ children, className, ...props }) => {
	return (
		<button
			className={cn(
				'px-4 py-3 text-white bg-sage rounded-lg text-sm',
				className
			)}
			{...props}>
			{children}
		</button>
	);
};

export default Button;
