import { NextPage } from 'next'
import { Button, Modal } from 'react-bootstrap'
import { AddBookForm } from '../add-book-form/add-book-form'

interface Props {
    isVisible: boolean
    onChangeVisible: (v: boolean) => void
}

export const AddBookDialog: NextPage<Props> = ({isVisible, onChangeVisible}) => {
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={isVisible}
            onHide={() => onChangeVisible(false)}
        >
            <Modal.Header closeButton onHide={() => onChangeVisible(false)}>
                <Modal.Title id="contained-modal-title-vcenter">
                Add new book
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddBookForm />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => onChangeVisible(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}