import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { audiobooks } from "../../../constants/audiobooks";
import { HeaderDetail } from "../../molecules/header-detail";

export const DetailPage = () => {
    const params = useParams();
    const bookId = params.id;

    const [book, setBook] = useState({});

    useEffect(() => {
        const book = audiobooks.filter((item) => item.id == bookId);
        setBook(book);
    }, [])

    return (
        <>
            <HeaderDetail />
        </>
    )
}