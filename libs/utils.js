import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...input) => {
	return twMerge(clsx(input));
};

export const formatPrice = (price) => {
	new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
	});

	return price.toLocaleString('id-ID', {
		style: 'currency',
		currency: 'IDR',
	});
};

export const formatDate = (date) => {
	return new Date(date).toLocaleDateString('id-ID', {
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	});
};
