import React from "react";
import { Link } from "react-router-dom";
import './section-home.css';

export const SectionHome = ({ name, content }: { name: string, content: React.ReactNode }) => (
    <section className="section-home">
        <div className="container">
            <div className="section-home__wrapper">
                <div className="section-home__heading-string">
                    <h2 className="section-home__heading-string-heading">
                        {name}
                    </h2>
                    <a href="#" className="section-home__heading-string-link">
                        See more
                    </a>
                    {/* <Link to="#" className="categories-home__heading-string-link">
                        See more
                    </Link> */}
                </div>
                {content}
            </div>
        </div>
    </section>
)