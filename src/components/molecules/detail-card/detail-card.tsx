import './detail-card.css';

export const DetailCard = ({ cover, title }: {
    cover: string | undefined,
    title: string | undefined,
}) => (
    <div className="detail-page__main-card">
        <div className='detail-page__card-img-wrapper'>
            <img src={cover} alt="Book cover" className="detail-page__card-img" />
        </div>
        <h2 className="detail-page__card-heading">
            {title}
        </h2>
    </div>
)