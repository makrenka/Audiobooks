import { audiobooks } from '../../../constants/audiobooks';
import { HeaderSection } from '../../molecules/header-section';

import './section-page.css';

export const SectionPage = () => (
    <>
        <HeaderSection />
        <div className='container'>
            <main className='section-page-main'>
                {audiobooks.map(({ cover, title, author }) =>
                    <div className="section-page-main__card" key={title}>
                        <img src={cover} alt="Cover of the book" className="section-page-main__card-img" />
                        <h3 className="section-page-main__card-heading">{title}</h3>
                        <p className='section-page-main__card-author'>{author}</p>
                    </div>
                )}
            </main>
        </div>
    </>

)