import * as React from 'react';

import { cn } from '@/libs/utils';

const Label = ({ children, className, ...props }) => {
	return (
		<label
			className={cn('text-sm font-medium mb-1 block', className)}
			{...props}>
			{children}
		</label>
	);
};

export default Label;
