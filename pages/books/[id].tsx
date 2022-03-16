import { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { BookLargeCard } from "../../components/book-large-card/book-large-card"
import { fetchCurrentBook } from "../../redux/current-book-reducer"
import { State } from "../../redux/types"

const BookPageId: NextPage = () => {
    const router = useRouter()
    const {id} = router.query
    const dispatch = useDispatch()
    const bookState = useSelector((state: State) => state.currentBook)

    useEffect(() => {
        dispatch(fetchCurrentBook(String(id)))
    }, [id, dispatch])

    if (!bookState.value) {

        return null
    }
 
    return (
        <>
            {bookState.status === 'loading' &&
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
            <BookLargeCard book={bookState.value} />
        </>
    )
}

export default BookPageId