import './search-panel.css';

export const SearchPanel = () => (
    <div className='container'>
        <form className="search-page__search-panel">
            <label htmlFor="search" className='search-page__search-panel-label'>
                Explore
            </label>
            <input
                id="search"
                type="text"
                placeholder="Search Books or Author..."
                className='search-page__search-panel-input'
            />
        </form>
    </div>

)