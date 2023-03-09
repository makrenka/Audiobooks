import { ChangeEvent, Component, ReactNode } from 'react';
import './search-panel.css';

interface Props {
    onValueChange: (value: string) => void,
}

export class SearchPanel extends Component<Props, { value: string }> {
    constructor(props: Props) {
        super(props);

        this.state = {
            value: '',
        }
    }

    onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        this.setState({ value });
        this.props.onValueChange(value);
    }

    render(): ReactNode {
        return (
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
                        onChange={this.onValueChange}
                        value={this.state.value}
                    />
                </form>
            </div>
        )
    }
}