import Image from 'next/image';
import { useState } from 'react';

const ImageGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="w-1/2 pr-4">
            <Image
                src={images[selectedImage]}
                alt={`Product Image ${selectedImage + 1}`}
                width={900}
                height={900}
                className='rounded-lg'
            />
            <div className='flex mt-2'>
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`rounded-lg ${selectedImage === index ? 'border-2 border-gray-500' : ''} ${index !== images.length - 1 ? 'mr-2' : ''}`}
                    >
                        <Image
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            width={80}
                            height={80}
                            className='rounded-lg'
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ImageGallery;