import { audiobooks } from '../../../constants/audiobooks';
import './recommended-card-group.css';

export const RecommendedCardGroup = () => (
    <div className="recommended-home__images">
        {audiobooks.map(({ coverBigSize, id }) =>
            <img src={coverBigSize} alt="Cover of the book" className='recommended-home__img' key={id} />
        )}
    </div>
)