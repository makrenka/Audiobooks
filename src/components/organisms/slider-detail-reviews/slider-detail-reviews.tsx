import { TouchEvent, useContext, useState } from 'react';

import { ReviewsContext } from '../../pages/detail-page/detail-page';
import { SlidesList } from './slides-list';

import './slider-detail-reviews.css';

export const SliderDetailReviews = () => {

    const [slide, setSlide] = useState(0);
    const [touchPosition, setTouchPosition] = useState<number | null>(null);
    const { reviews } = useContext(ReviewsContext);

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
            <SlidesList
                slideNumber={slide}
            />

        </div>
    )
}