import { createContext, TouchEvent, useState } from 'react';

import './slider-detail-reviews.css';
import { SlidesList } from './slides-list';

interface ContextProps {
    slideCount: number | undefined,
    slideNumber: number,
}

const valueContext = {
    slideCount: 0,
    slideNumber: 0,
}

export const SliderContext = createContext<ContextProps>(valueContext);

export const SliderDetailReviews = ({ reviews }: { reviews: [] | undefined }) => {

    const [slide, setSlide] = useState(0);
    const [touchPosition, setTouchPosition] = useState<number | null>(null);

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if (slide + direction < 0) {
            slideNumber = (reviews || '').length - 1;
        } else {
            slideNumber = (slide + direction) % (reviews || '').length;
        };

        setSlide(slideNumber);
    };

    const goToSlide = (number: number) => {
        setSlide(number % (reviews || '').length);
    };

    const handleTouchStart = (e: TouchEvent) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (touchPosition === null) return;

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;

        if (direction > 10) {
            changeSlide(1);
        };

        if (direction < -10) {
            changeSlide(-1);
        };

        setTouchPosition(null);
    }

    return (
        <div
            className="detail-page__reviews-slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <SliderContext.Provider
                value={{
                    slideCount: reviews?.length,
                    slideNumber: slide,
                }}
            >
                <SlidesList reviews={reviews} />
            </SliderContext.Provider>

        </div>
    )
}