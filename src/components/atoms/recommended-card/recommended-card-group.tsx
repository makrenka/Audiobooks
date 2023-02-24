import { recommendedImages } from '../../../constants/recommended-images';
import './recommended-card-group.css';

export const RecommendedCardGroup = () => (
    <div className="recommended-home__images">
        {recommendedImages.map(({ src, id }) =>
            <img src={src} alt="Cover of the book" className='recommended-home__img' key={id} />
        )}
    </div>
)