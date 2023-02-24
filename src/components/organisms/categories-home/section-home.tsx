import React from "react";
import { Link } from "react-router-dom";
import './section-home.css';

export const SectionHome = ({ name, className, content }: { name: string, className: string, content: React.ReactNode }) => (
    <section className={className + "-home"}>
        <div className="container">
            <div className={className + "-home__wrapper"}>
                <div className={className + "-home__heading-string"}>
                    <h2 className={className + "-home__heading-string-heading"}>
                        {name}
                    </h2>
                    <a href="#" className={className + "-home__heading-string-link"}>
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