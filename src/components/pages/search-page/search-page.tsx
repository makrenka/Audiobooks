import { BottomBar } from "../../molecules/bottom-bar";
import { CategorySearchBtnGroup } from "../../molecules/category-search-btn-group";
import { Header } from "../../molecules/header";
import { LatestSearchCardsGroup } from "../../molecules/latest-search-cards-group";
import { SearchPanel } from "../../molecules/search-panel";

import './search-page.css';

export const SearchPage = () => (
    <>
        <Header />
        <main className="search-page__main">
            <SearchPanel />
            <CategorySearchBtnGroup />
            <LatestSearchCardsGroup />
        </main>
        <BottomBar />
    </>
)