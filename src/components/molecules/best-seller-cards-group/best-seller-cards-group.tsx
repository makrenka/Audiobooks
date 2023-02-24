import { bestSellerCards } from "../../../constants/best-seller-cards";
import './best-seller-cards-group.css';

export const BestSellerCardsGroup = () => (
    <div className="best-seller-home__cards">
        {bestSellerCards.map(({ cover, title, author, rating, listeners, name }) =>
            <div className="best-seller-home__card" key={name}>
                <img src={cover} alt="Cover of the book" className="best-seller-home__card-img" />
                <div className="best-seller-home__card-description">
                    <h3 className="best-seller-home__card-description-heading">{title}</h3>
                    <p className="best-seller-home__card-description-author">{author}</p>
                    <img src={rating} alt="rating" className="best-seller-home__card-description-rating" />
                    <p className="best-seller-home__card-description-listeners-counter">{listeners}</p>
                </div>
            </div>
        )}
    </div>
)