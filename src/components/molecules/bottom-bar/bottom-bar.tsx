import { HandySvg } from "handy-svg";

import { HomeIndicator } from "../../atoms/home-indicator";

import homeIcon from "../../../assets/images/icons/bottom-bar-home-icon.svg";
import searchIcon from "../../../assets/images/icons/bottom-bar-search-icon.svg";
import libraryIcon from "../../../assets/images/icons/bottom-bar-library-icon.svg";

import './bottom-bar.css';


export const BottomBar = () => (
    <div className="bottom-bar">
        <div className="bottom-bar__tab-bar">
            <a href="/" className="bottom-bar__tab-bar-link">
                <HandySvg
                    src={homeIcon}
                    className="bottom-bar__tab-bar-link-icon"
                    width="25"
                    height="24"
                />
                <span className="active">Home</span>
            </a>
            <a href="#" className="bottom-bar__tab-bar-link">
                <HandySvg
                    src={searchIcon}
                    className="bottom-bar__tab-bar-link-icon"
                    width="25"
                    height="24"
                />
                <span>Search</span>
            </a>
            <a href="#" className="bottom-bar__tab-bar-link">
                <HandySvg
                    src={libraryIcon}
                    className="bottom-bar__tab-bar-link-icon"
                    width="25"
                    height="24"
                />
                <span>Search</span>
            </a>
        </div>
        <HomeIndicator />
    </div>
)