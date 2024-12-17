import '@/app/styles/embla.css';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Carousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [
            Autoplay({
                delay: 3000, // Waktu pergeseran otomatis dalam milidetik (3 detik)
                stopOnInteraction: false,
            }),
        ]
    );
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const images = [
        "/images/sliders/slider1.png",
        "/images/sliders/slider1.png",
        "/images/sliders/slider1.png",
    ];

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        });
    }, [emblaApi]);

    const scrollTo = (index) => emblaApi.scrollTo(index);

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {images.map((src, index) => (
                    <div
                        className="embla__slide"
                        key={index}
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: '300px',
                        }}
                    >
                        <Image
                            src={src}
                            alt={`Slide ${index + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </div>
            <div className="embla__buttons">
                <button className="embla__button" onClick={() => emblaApi.scrollPrev()}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="icon"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button className="embla__button" onClick={() => emblaApi.scrollNext()}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="icon"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            <div className="embla__indicators">
                {scrollSnaps.map((_, index) => (
                    <div
                        key={index}
                        className={`embla__indicator-line ${index === selectedIndex ? 'is-selected' : ''
                            }`}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
