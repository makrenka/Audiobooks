import { audiobooks } from "../../../constants/audiobooks";
import './new-and-trend-cards-group.css';

export const NewAndTrendCardsGroup = () => (
    <div className="new-and-trend-home__cards">
        {audiobooks.map(({ cover, title, id }) =>
            <div className="new-and-trend-home__card" key={id}>
                <img src={cover} alt="Cover of the book" className="new-and-trend-home__card-img" />
                <h3 className="new-and-trend-home__card-heading">{title}</h3>
            </div>
        )}
    </div>
)