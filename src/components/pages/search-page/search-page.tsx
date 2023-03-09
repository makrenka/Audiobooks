import { ChangeEvent, Component, ReactNode } from "react";

import { BottomBar } from "../../molecules/bottom-bar";
import { CategorySearchBtnGroup } from "../../molecules/category-search-btn-group";
import { Header } from "../../molecules/header";
import { LatestSearchCardsGroup } from "../../molecules/latest-search-cards-group";
import { SearchPanel } from "../../molecules/search-panel";

import './search-page.css';

export class SearchPage extends Component<{}, { value: string }> {
    constructor(props: any) {
        super(props);

        this.state = {
            value: '',
        }
    }

    onValueChange = (value: string) => {
        this.setState({ value })
    }

    render(): ReactNode {
        return (
            <>
                <Header />
                <main className="search-page__main">
                    <SearchPanel onValueChange={this.onValueChange} />
                    <CategorySearchBtnGroup />
                    <LatestSearchCardsGroup />
                </main>
                <BottomBar />
            </>
        )
    }
}