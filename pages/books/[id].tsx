import { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { BookLargeCard } from "../../components/book-large-card/book-large-card"
import { SpinnerContainer } from "../../components/spinner/spinner"
import { fetchCurrentBook, removeCurrentBookValue } from "../../redux/current-book-reducer"
import { State } from "../../redux/types"

const BookPageId: NextPage = () => {
    const router = useRouter()
    const {id} = router.query
    const dispatch = useDispatch()
    const bookState = useSelector((state: State) => state.currentBook)

    useEffect(() => {
        dispatch(fetchCurrentBook(String(id)))
        return () => {
            dispatch(removeCurrentBookValue())}
    }, [id, dispatch])

    if (!bookState.value) {

        return null
    }
 
    return (
        <Container>
            <SpinnerContainer isVisible={bookState.status === 'loading'} />
            <BookLargeCard book={bookState.value} />
        </Container>
    )
}

export default BookPageId