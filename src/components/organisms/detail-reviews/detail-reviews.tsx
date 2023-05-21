import { SliderDetailReviews } from '../slider-detail-reviews';

import './detail-reviews.css';

export const DetailReviews = ({ reviews }: { reviews: [] | undefined }) => (
    <div className="detail-page__reviews">
        <h3 className="detail-page__reviews-heading">Reviews</h3>
        <SliderDetailReviews
            reviews={reviews}
        />
    </div>
);