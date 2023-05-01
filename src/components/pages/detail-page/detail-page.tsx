import { Component, ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { audiobooks } from "../../../constants/audiobooks";
import WithRouter from "./with-router";
import { DetailCard } from "../../molecules/detail-card";
import { HeaderDetail } from "../../molecules/header-detail";

// type Params = {
//     id?: string,
// }

// class DetailPage extends Component<{ params: Params }> {

//     state = {
//         book: {},
//     }

//     getBook = () => {
//         const bookId = this.props.params.id;
//         const book = audiobooks.filter((item) => item.id == bookId);
//         this.setState({ book });
//     }

//     componentDidMount() {
//         this.getBook();
//     }

//     render(): ReactNode {
//         console.log(this.state.book)
//         return (
//             <>
//                 {/* <HeaderDetail title={title} /> */}
//                 <main className="detail-page__main">
//                     <div className="container">
//                         {/* <DetailCard cover={cover} /> */}
//                     </div>
//                 </main>
//             </>
//         )
//     }
// };

// export default WithRouter(DetailPage);

export const DetailPage = () => {
    const params = useParams();
    const bookId = params.id;

    const [book, setBook] = useState([{}]);

    useEffect(() => {
        const book = audiobooks.filter((item) => item.id == bookId);
        setBook(book);
    }, []);

    type Props = {
        title?: string,
        cover?: string,
    };

    const { title, cover }: Props = book[0];

    return (
        <>
            <HeaderDetail title={title} />
            <main className="detail-page__main">
                <div className="container">
                    <DetailCard
                        cover={cover}
                        title={title}
                    />
                </div>
            </main>
        </>
    )
}