import { Link } from "react-router-dom";
import { categories } from "../../../constants/categories";
import { CategoryHomeBtn } from "../../atoms/category-home-btn";
import './categories-home.css';

export const CategoriesHome = () => (
    <section className="categories-home">
        <div className="container">
            <div className="categories-home__wrapper">
                <div className="categories-home__heading-string">
                    <h2 className="categories-home__heading-string-heading">
                        Categories
                    </h2>
                    <a href="#" className="categories-home__heading-string-link">
                        See more
                    </a>
                    {/* <Link to="#" className="categories-home__heading-string-link">
                        See more
                    </Link> */}
                </div>
                <div className="categories-home__buttons">
                    {categories.map((item) =>
                        <CategoryHomeBtn data={item} />
                    )}
                </div>
            </div>
        </div>
    </section>
)