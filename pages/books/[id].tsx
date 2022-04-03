import { NextPage } from "next"
import { useRouter } from "next/router"
import { useCallback, useEffect } from "react"
import { Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { BookLargeCard } from "../../components/book-large-card/book-large-card"
import { SpinnerContainer } from "../../components/spinner/spinner"
import { ToastCommon } from "../../components/toast-common/toast-common"
import { fetchCurrentBook, nullDeleteStatus, removeCurrentBookValue } from "../../redux/current-book-reducer"
import { State } from "../../redux/types"

const BookPageId: NextPage = () => {
    const router = useRouter()
    const {id} = router.query
    const dispatch = useDispatch()
    const bookState = useSelector((state: State) => state.currentBook)
    const onDeleteStatusNull = useCallback(() => dispatch(nullDeleteStatus()), [dispatch])

    useEffect(() => {
        dispatch(fetchCurrentBook(String(id)))
        return () => {
            dispatch(removeCurrentBookValue())
            onDeleteStatusNull()}
    }, [id, dispatch, onDeleteStatusNull])

    if (!bookState.value) {
        return null
    }
 
    return (
        <Container>
            <SpinnerContainer isVisible={bookState.status === 'loading' || bookState.deleteStatus === 'loading'} />
            {bookState.deleteStatus === 'idle' && <ToastCommon text='Book deleted successfully' background="success" removeTrigger={onDeleteStatusNull}/>}
            {bookState.deleteStatus === 'failed' && <ToastCommon text='Http request error' background="danger" removeTrigger={onDeleteStatusNull}/>}
            <BookLargeCard book={bookState.value} />
        </Container>
    )
}

export default BookPageId