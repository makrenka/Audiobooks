import { BottomBar } from "../../molecules/bottom-bar";
import { Header } from "../../molecules/header";
import { SearchPanel } from "../../molecules/search-form";

import './search-page.css';

export const SearchPage = () => (
    <>
        <Header />
        <main className="search-page__main">
            <SearchPanel />
        </main>
        <BottomBar />
    </>
)