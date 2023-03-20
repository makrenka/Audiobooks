export const DetailCard = ({ cover }: { cover: string | undefined }) => (
    <div className="detail-page__main-card">
        {cover}
        <h2 className="detail-page__card-heading">
            Harry Potter and the Sorcer...
        </h2>
    </div>
)