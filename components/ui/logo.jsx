import Image from 'next/image';
import Logo from '@/public/images/logo/white-logo.svg';

const ApplicationLogo = ({ className, ...props }) => {
	return (
		<div className='flex items-center justify-center space-x-1'>
			<Image src={Logo} alt='Application Logo' width={32} />
			<span className={className}>
				{process.env.NEXT_PUBLIC_APPLICATION_NAME}
			</span>
		</div>
	);
};

export default ApplicationLogo;
