import './category-home-btn.css';

export const CategoryHomeBtn = ({ data }: { data: string }) => (
    <button type="button" className="categories-home__btn">
        {data}
    </button>
)