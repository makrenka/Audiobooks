import { categories } from '../../../constants/categories';
import './category-home-btn-group.css';

export const CategoryHomeBtnGroup = () => (
    <div className="categories-home__buttons">
        {categories.map(({ id, name }) =>
            <button type="button" className="categories-home__btn" key={id}>
                {name}
            </button>
        )}
    </div>

)